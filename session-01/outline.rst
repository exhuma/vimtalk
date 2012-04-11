Basics
======

help
----

* opening::

    :h[elp] [topic]
    CTRL+D

* navigating::

    CTRL+]
    CTRL+T
    CTRL+O

vim-grammar
-----------

* verb/noun
* text objects/motions::

    :h text-objects

modes
-----

::

    :h vim-modes-intro

* Always enter ``Insert`` mode in the most appropriate manner possible::

    o/O
    i/I
    c{motion}/C
    a/A
    ...

Examples/Showcase
=================

Copy(Yank)/Paste
----------------

::

    NORMAL: yy, y{motion}
    VISUAL: y
    NORMAL: p/P

Navigation
----------


Quick commands
--------------

* Quicksearch::

    *
    #

* Text formatting::

    NORMAL: gqq
    VISUAL: gq

Macros
------

* SQL Transformation

Folding
-------


Customisation
=============

Mappings
--------

::

    [vni][nore]map

* Bubbling::

    vnoremap <C-Up> xkP`[V`]
    vnoremap <C-Down> xp`[V`]

Syntax Highlighting
-------------------

Minimal Config
--------------

Plugins
-------

Final Words
===========

vimtutor
--------

buffers, windows, splits and tabs
---------------------------------

cheat sheets
------------

