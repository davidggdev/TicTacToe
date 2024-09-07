<?php

namespace Api\Http;

use Api\Http\HttpRequestStatusCode;
use Api\Http\HttpMapActions;
use Api\Http\HttpResponse;
use Api\Domain\Utils\JsonChecker;

/**
 * Class HttpRequest - Handle HTTP requests
 */
class HttpRequest
{
    /**
     * Request data from the client
     * @var string $data   Request data
     */
    protected string $postRequestData;

    /**
     * HttpMapActions instance
     * @var HttpMapActions $httpMapActions
     */
    protected HttpMapActions $httpMapActions;

    /**
     * HttpRequest constructor
     * @throws \Exception  No postRequestData provided
     * @return void
     */
    public function __construct()
    {
        try {
            $this->postRequestData = file_get_contents('php://input');
            if (empty($this->postRequestData)) {
                throw new \Exception('No postRequestData provided');
            }
            // Instantiate the HttpMapActions class
            $this->httpMapActions = new HttpMapActions();

            // Handle the request
            $this->handle($this->postRequestData);
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
    }

    /**
     * Handle the request
     * @param string $data  Request data
     * @return void
     */
    private function handle(string $request): void
    {
        try {
            // Get the request data
            $requestArray = $this->getRequest($request);
            if (!isset($requestArray['action'])) {
                throw new \Exception('No action provided');
            }

            // Check the response data and get the action
            $action = $this->getActionFromRequest($requestArray);

            // Handle the action
            $response = $this->handleAction($action);

            // Send the response
            $this->response(
                $response['statusCode'],
                $response['result']
            );
        } catch (\Exception $e) {
            $this->response(
                HttpRequestStatusCode::$BAD_REQUEST,
                json_encode(['error' => $e->getMessage()])
            );
        }
    }

    /**
     * Get the request
     * @param string $request  Request data
     * @return array
     */
    private function getRequest(string $request): array
    {
        if (!JsonChecker::isValidJson($request)) {
            throw new \Exception('Invalid JSON');
        }

        return json_decode($request, true);
    }

    /**
     * Check the response and check if the action is provided in the request, 
     * if not throw an exception. 
     * @param array $request  Request data
     * @return string
     * @throws \Exception  No action provided
     */
    private function getActionFromRequest(array $requestArray): string
    {
        if (!isset($requestArray['action'])) {
            throw new \Exception('No action provided');
        }
        return $requestArray['action'];
    }

    /**
     * Handle the action
     * @param string $action  Action to handle
     * @return array Response data
     */
    private function handleAction(string $action): array
    {
        // Get the action from the HttpMapActions class
        $actions = $this->httpMapActions->get();
        if (isset($actions[$action])) {
            $class = $actions[$action];
            return $this->getResultAction(
                HttpRequestStatusCode::$OK,
                (new $class())->get()
            );
        } else {
            return $this->getResultAction(
                HttpRequestStatusCode::$BAD_REQUEST,
                HttpResponse::response(['error' => 'Invalid action'])
            );
        }

        return  $this->getResultAction(
            HttpRequestStatusCode::$BAD_REQUEST,
            HttpResponse::response(['error' => 'Invalid action'])
        );
    }

    /**
     * Format the result data to return to the client
     * @param int $statusCode  HTTP status code
     * @param array $result   Result
     * @return array Response data 
     */
    private function getResultAction(int $statusCode, string $result): array
    {
        return [
            'statusCode' => $statusCode,
            'result' => $result
        ];
    }
    
    /**
     * Send the response
     * @param array $httpResponseStatus  HTTP response status
     * @param string $jsonResponse       JSON response
     * @return void
     */
    private function response(int $statusCode, string $jsonResponse): void
    {
        header('Content-Type: application/json');
        http_response_code($statusCode);
        echo $jsonResponse;
    }
}
