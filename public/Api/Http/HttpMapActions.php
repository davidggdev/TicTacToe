<?php

namespace Api\Http;

/**
 * Class HttpMapActions - Map the HTTP actions to the domain classes
 */
class HttpMapActions
{
    /**
     * Get the domain class map for the HTTP actions
     * @return array
     */
    public function get(): array
    {
        /**
         * The key is the action and the value is the domain class
         * @example
         * 'index/get' => 'Api\Domain\Home\IndexDomain'
         * 
         * This means that when the action is 'index/get', the domain class 
         * 'Api\Domain\Home\IndexDomain' will be used
         */
        return [
            'index/get' => 'Api\Domain\Home\IndexDomain',
        ];
    }
}
