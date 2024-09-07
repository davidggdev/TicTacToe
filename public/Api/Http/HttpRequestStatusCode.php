<?php

namespace Api\Http;

/**
 * Class HttpRequestStruct - Handle HTTP request structure
 */
class HttpRequestStatusCode
{
    
    /**
     * Status code 200 OK
     * @var int $OK
     */
    public static int $OK = 200;

    /**
     * Status code 200 OK
     * @var int $SUCCESS
     */
    public static int $SUCCESS = 200;

    /**
     * Status code 404 Not Found
     * @var int $NOT_FOUND
     */
    public static int $NOT_FOUND = 404;

    /**
     * Status code 400 Bad Request
     * @var int $BAD_REQUEST
     */
    public static int $BAD_REQUEST = 400;

    /**
     * Status code 401 Unauthorized
     * @var int $UNAUTHORIZED
     */
    public static int $UNAUTHORIZED = 401;

    /**
     * Status code 403 Forbidden
     * @var int $FORBIDDEN
     */
    public static int $FORBIDDEN = 403;

    /**
     * Status code 500 Internal Server Error
     * @var int $ERROR
     */
    public static int $ERROR = 500;
}
