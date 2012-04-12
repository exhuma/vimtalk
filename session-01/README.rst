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

To get (back) into normal mode, you either type ``<ESC>`` or ``CTRL+[``.

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

Visual mode is commonly started using either ``v`` (normal select), ``Shift+V``
(linewise selection)  or ``CTRL+V`` (block selection)

Command-Line mode
~~~~~~~~~~~~~~~~~

In command line mode, you can enter a vim command. Usually command line mode is
started using ``:``, ``/`` or ``?``.

Examples/Showcase
=================

Block select + Insert
---------------------

This can be useful to comment out a block of code.

Example file
    ``examples/javascript.js``

1. Select a block of text using ``CTRL+V``
2. Either type ``Shift+I`` or ``Shift+A`` to insert text
3. Confirm using either ``<ESC>`` or ``CTRL+[``

Useful shortcuts
----------------

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

``*``/``#``
    Find the word under the cursor (forwards/backwards)

``gqq``
    Automatically format the current line

``VISUAL: gq``
    Automatically format the selected text

``CTRL+N``/``CTRL+P``
    Text completion ([N]ext, [P]revious). It is very naïve and only looks for
    words in all open buffers.

Copy (Yank) / Paste
-------------------

Copying can be done either in normal or visual mode:

Normal
    * ``yy``: yank the current line
    * ``y{motion or text-object}``: yank the mentioned text-object

Visual
    * ``y``: Yank the selected text

Normal
    * ``p``: Paste below the current line
    * ``Shift+P``: Paste above the current line

Navigation
----------

``h``, ``j``, ``k`` and ``l`` as navigation keys!

Macros
------

``qa``
    Start a macro recording (``a``) is a named register. It can be any
    alphabetic letter. In other words, you can record up to 26 macros!

    From this point on *all* key presses will be recorded into the named macro
    and can be replayed later

``q``
    Stop recording.

``@a``
    Play the macro stored in register ``a``.

``@@``
    Re-execute the last executed macro.

Folding
-------

::

    :h folding

The main folding methods are:

manual
    Only use manually created folds

indent
    use the file indentation level for fold. This uses the setting
    ``shiftwidth`` to determine the folding level.

marker
    uses a special marker (default: ``{{{`` and ``}}}``) to define where a fold
    starts and ends

syntax
    Uses the sytax definition to set folds. This only works if the syntax
    definition supports this feature.

Useful shortcuts
~~~~~~~~~~~~~~~~

``za``
    Toggle open/close

``zf``
    Creates a new fold in manual and marker mode (in marker mode, it
    automatically inserts the markers surrounded with the value from
    ``'commentstring'``!)

``zR``
    Open all folds.

``zM``
    Close all folds.

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

Appendix I - Cheat Sheets
=========================

* ``:viusage``
* http://michaelgoerz.net/refcards/vimqrc.pdf
* http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html
* http://michael.peopleofhonoronly.com/vim/
* http://naleid.com/blog/2010/10/04/vim-movement-shortcuts-wallpaper/

Appendix II - Example Macro
===========================

Convert a SELECT Statement to a Java class with getters and setters
-------------------------------------------------------------------

* Open the file examples/sql.sql::

      :e examples/sql.sql

* Yank the line containing the SELECT statement::

      /SELECT<CR>yy

* Open a new file::

      :e Client.java

* Paste the line::

      <SHIFT+P>

* Yank the name of the table (the last word)::

      $Bye

* Add a new line below this one, and insert the class statement::

      o
      public class<ESC>

* Paste the table name, and uppercase the first character::

      pb~

* Add the beginning and ending braces::

      A{<CR>}<ESC>

* Go back to the first line (the SELECT statement), and extract the field names::

      gg
      dw
      /FROM<CR>
      hD

* Move the line below the "class" line (delete + paste)::

      ddp

* Replace all occurences of ``", "`` with a newline::

      V
      :s/, /<CTRL+V><CR>/g

* Jump back to the original position::

      ggj

* Start the macro::

      qq

* Record the following actions::

      "tye
      I<CTRL+t>
      public String get<ESC>
      l~
      A(){<CR>
      return this.<CTRL+R>t;<CR>
      }<CR><CR>
      public void set<CTRL+R>t<ESC>
      Blll~
      A(String<SPACE>
      <CTRL+R>t
      ){<CR>
      this.<CTRL+R>t = <CTRL+R>t;<CR>
      }<CR><ESC>
      j0
      q

* This macro can now be executed by positioning the cursor on the beginning of
  the next field (should be already the case), and by typing ``@q``.

  This macro makes sure that the cursor position after executing it allows us
  to execute it again without moving the cursor. This in turn allows us to
  repeat the macro (for example 10 times) by typing ``10@q``.
