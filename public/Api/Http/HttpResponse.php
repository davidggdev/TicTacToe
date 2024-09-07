<?php

namespace Api\Http;

/**
 * Class HttpResponse - Handle HTTP responses
 */
class HttpResponse
{
    /**
     * Send a response to the client
     * @param array $data         Response data
     * @param int $statusCode     HTTP status code
     * @return string
     */
    public static function response(array $data): string
    {
        return json_encode($data);
    }
}
