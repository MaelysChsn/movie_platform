<?php

class CookieHelper
{
    public static function setCookie(string $token, string $email): void
    {
        setcookie('hetic_token', $token, time() + 1000, '/');
        setcookie('hetic_email', $email, time() + 1000, '/');
    }
}
