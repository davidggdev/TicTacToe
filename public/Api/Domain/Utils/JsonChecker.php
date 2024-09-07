<?php

namespace Api\Domain\Utils;

/**
 * Class SanityChecker - Check the sanity of the data
 */
class JsonChecker
{
    /**
     * Check if the JSON is valid
     * @param string $json  JSON string
     * @return bool
     */
    public static function isValidJson(string $json): bool
    {
        json_decode($json);
        return json_last_error() === JSON_ERROR_NONE;
    }

    public static function jsonToArray(string $json): array
    {
        return json_decode($json, true);
    }

    public static function arrayToJson(array $array): string
    {
        return json_encode($array);
    }

    public static function jsonToObj(string $json)
    {
        return json_decode($json);
    }
}
