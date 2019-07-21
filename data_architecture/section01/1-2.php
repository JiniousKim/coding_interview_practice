<?php
/**
 * Created by IntelliJ IDEA.
 * User: KimDaeJin
 * Date: 21/07/2019
 * Time: 3:10 PM
 */

function reverseStr($str)
{
    return strrev($str);
}

$str = $argv[1];
echo reverseStr($str);