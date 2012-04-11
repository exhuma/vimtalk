Basics
======

help
----

* How to open the help::

    :h[elp] [topic]
    :h 'option'
    :h :command

* TAB-Completion

  ``vim`` supports TAB-completion for many commands and argument. Including the
  arguments to the ``help`` command. Additionally, wherever TAB-Completion is
  supported, the shortcut ``CTRL+D`` can be used to pop-up a list of possible
  matches.

* Navigating the help::

    CTRL+] -- Follow link
    CTRL+T -- Back

  The following shortcuts also work. These shortcuts are available in **many**
  other contexts as well (see ``:h jumplist``). Remember them well!::

    CTRL+O -- Back (jump "out")
    CTRL+I -- Forward (jump "in")

* Interesting help-topics:

  * ``motion.txt`` (interesting sections: ``operator``, ``text-objects``,
    ``word-motions``, ...)

vim-grammar
-----------

* verb, noun/motion

  Example::

     caw
     [c]hange [a w]ord

     c:  verb
     aw: noun (see :h text-objects)

     --------------------------------------------

     [2]-times [d]elete to [e]nd-of-word
     2de

     d: verb
     e: noun (see :h word-motions)

  Exceptions::

     Delete a line
     dd

     Copy (yank) a line
     yy

* text objects/motions::

    :h motion.txt

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

* ``:viusage``
* http://michaelgoerz.net/refcards/vimqrc.pdf
* http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html
* http://michael.peopleofhonoronly.com/vim/
