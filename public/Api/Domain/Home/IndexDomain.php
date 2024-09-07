<?php

namespace Api\Domain\Home;

use Api\Http\HttpResponse;

/**
 * Class IndexDomain - Handle the index domain
 */
class IndexDomain
{
    /**
     * Get the index domain
     * @return string
     */
    public function get()
    {
        return HttpResponse::response(['message' => 'Welcome to the API']);
    }
}
