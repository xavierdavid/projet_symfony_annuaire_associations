<?php

use PhpCsFixer\Config;
use PhpCsFixer\Finder;

$finder = Finder::create()
    ->in([__DIR__.'/src'])
    ->exclude(['var', 'vendor']);

return (new Config())
    ->setRiskyAllowed(true) // Permet des règles plus strictes
    ->setRules([
        '@Symfony' => true,
        'array_syntax' => ['syntax' => 'short'],
        'yoda_style' => false,
        'no_unused_imports' => true,
        'ordered_imports' => true,
    ])
    ->setFinder($finder);

