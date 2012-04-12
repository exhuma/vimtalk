Basics
======

help
----

How to open the help
~~~~~~~~~~~~~~~~~~~~

::

    :h[elp] [topic]
    :h 'option'
    :h :command

TAB-Completion
~~~~~~~~~~~~~~

``vim`` supports TAB-completion for many commands and argument. Including the
arguments to the ``help`` command. Additionally, wherever TAB-Completion is
supported, the shortcut ``CTRL+D`` can be used to pop-up a list of possible
matches.

Navigating the help
~~~~~~~~~~~~~~~~~~~

::

    CTRL+] -- Follow link
    CTRL+T -- Back

The following shortcuts also work. These shortcuts are available in **many**
other contexts as well (see ``:h jumplist``). Remember them well!::

    CTRL+O -- Back (jump "out")
    CTRL+I -- Forward (jump "in")

Interesting help-topics:
~~~~~~~~~~~~~~~~~~~~~~~~

* ``motion.txt`` (interesting sections: ``operator``, ``text-objects``,
  ``word-motions``, ...)

vim-grammar
-----------

verb, noun/motion
~~~~~~~~~~~~~~~~~

Example::

    caw
    [c]hange [a w]ord

    c:  verb
    aw: noun (see :h text-objects)

--------------------------------------------

::

    [2]-times [d]elete to [e]nd-of-word
    2de

    d: verb
    e: noun (see :h word-motions)

Exceptions::

    Delete a line
    dd

    Copy (yank) a line
    yy

Text objects/motions
~~~~~~~~~~~~~~~~~~~~

::

    :h motion.txt

Motions
^^^^^^^

``w/W``
    one word forward (to the beginning of the next word)

``e/E``
    one word forward (the the end of the current word)

``}``
    One paragraph forward (to the next empty line)

``f/F``
    Move to the next/previous named character

``t/T``
    Move before the next/previous named character

Text Objects
^^^^^^^^^^^^

``i(``
    text inside parentheses

``a(``
    a parentheses "block"

``i"``
    text inside double quotes

``a"``
    a double quotes "block"

``iw``
    a word (excluding whitespace)

``aw``
    a word (including whitespace)

modes
-----

::

    :h vim-modes-intro

I will briefly mention Normal, Insert Visual and Command-Line mode. Others
exist as well. See the appropriate help page!

Normal mode
~~~~~~~~~~~

In normal mode *every key* is a shortcut! It's worth knowing them all!

Insert mode
~~~~~~~~~~~

Always enter ``Insert`` mode in the most appropriate manner possible!

``o/O``
    Open a new line below/above the current line

``i/I``
    Insert new text before the current character/at end of line

``c{motion or text-object}/C``
    change some text/to the end of the line

``cc``
    Change the current line

``a/A``
    Insert new text after the current character/at end of line

Visual mode
~~~~~~~~~~~

Visual mode can be used to select a range of text, and perform operations on it.

Command-Line mode
~~~~~~~~~~~~~~~~~

In command line mode, you can enter a vim command. Usually command line mode is
started using ``:``, ``/`` or ``?``.

Examples/Showcase
=================

Block select + Insert
---------------------

**TODO**

Other useful shortcuts
----------------------

``gf``
    Goto file under cursor

``CTRL+O``
    Jump "out" (back) (see ``gf``)

``~``
    Toggle character case

``CTRL+D``
    Un-indent while in insert mode

``CTRL+T``
    Indent current line while in insert mode

**TODO**

Copy(Yank)/Paste
----------------

::

    NORMAL: yy, y{motion}
    VISUAL: y
    NORMAL: p/P

**TODO**

Navigation
----------


**TODO**

Quick commands
--------------

**TODO**

* Quicksearch::

    *
    #

* Text formatting::

    NORMAL: gqq
    VISUAL: gq

**TODO**

Macros
------

**TODO**

* SQL Transformation

**TODO**

Folding
-------

**TODO**


Customisation
=============

**TODO**

Mappings
--------

**TODO**

::

    [vni][nore]map

**TODO**

* Bubbling::

    vnoremap <C-Up> xkP`[V`]
    vnoremap <C-Down> xp`[V`]

**TODO**

Syntax Highlighting
-------------------

**TODO**

Minimal Config
--------------

Source: http://www.reddit.com/r/vim/comments/s1nwu/a_few_questions_pertaining_to_my_vimrc/c4afu8e

::

    set nocompatible                " Disable Vi compatability
    filetype plugin indent on       " Enable filetype-specific options
    set backspace=indent,eol,start  " allow backspacing over everything in insert mode
    set showcmd                     " display commands as you type them
    nmap Y y$                       " Y defaults to doing yy due to Vi compatability, but this makes it consistent with D and C

Plugins
-------

**TODO**

Final Words
===========

**TODO**

vimtutor
--------

**TODO**

buffers, windows, splits and tabs
---------------------------------

**TODO**

cheat sheets
------------

* ``:viusage``
* http://michaelgoerz.net/refcards/vimqrc.pdf
* http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html
* http://michael.peopleofhonoronly.com/vim/
* http://naleid.com/blog/2010/10/04/vim-movement-shortcuts-wallpaper/


