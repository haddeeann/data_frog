---
layout: "article_type_two.njk"
---
# NumPy Setup
[Go home](/index.html)

## Command Line

This is an explanation on how you can run NumPy code from the command line.

Open up a command line and start by importing NumPy first at the prompt.

## The standard way to import NumPy:
`import numpy as np`

## False Start
I don't know. I thought since there was a script example on the Numpy page that it would be as easy as downloading Numpy into a virtual python environment. 

This *didn't* work but here's my process so far:

I thought. Step one, create an venv folder and a venv environment.

Step two, use the python command to create a venv. 
`python3 -m venv /path/to/new/virtual/environment`

Step three, start my venv environment:
`source ./venv/bin/activate`

See me. See me finally get curious about this `source` command I've been using to start my Python environment.

Side note:
'`source` is a bash shell built-in command that executes the content of the file passed as argument, in the current shell. It's similar to the . (period).'

I started my Python environment and did a `pip install numpy`

I got the error:
```
ERROR: Failed building wheel for numpy
Failed to build numpy
ERROR: Could not build wheels for numpy which use PEP 517 and cannot be installed directly
```

I have no idea what this means. So things don't work as I thought.

## Choosing Between Anaconda and Conda

The next step is to learn a little bit more about what I should install. (And delete my virtual environment where I rried to install numpy)

Apparently I need to install a little bit more of a package organizer. I don't know which package organizer or program I should install. So the next step is my google-fu.

Here's the first article I found:
[Anaconda vs Conda vs Miniconda](https://towardsdatascience.com/get-your-computer-ready-for-machine-learning-how-what-and-why-you-should-use-anaconda-miniconda-d213444f36d6)

- Anaconda, Miniconda and Conda are tools which help you manage your other tools.
- Anaconda and Miniconda are software distributions
  - Anaconda comes with over 150 data science packages, everything you could imagine
  - Miniconda comes with a handful of what’s needed
- Conda is a package manager. It helps you take care of your different packages by handling installing, updating and removing them.
- Both Anaconda and Miniconda come with Conda. And because Conda is a package manager, what you can accomplish with Anaconda, you can do with Miniconda. 

Now I have a decision. Install Anaconda or Miniconda. After some soul searching I'm going to try Anaconda (full version).

I have the disk space, and I think I'm going to choose the convenience of only have to install things once and not worry if I have everything. 

After reading the [comments](https://stackoverflow.com/questions/45421163/anaconda-vs-miniconda) it seems like the differences are that Anaconda is more complete and has everything you could possibly want installed, so it takes up lots of space. And Miniconda comes with some basics and utilities, but then you need to add things when you need them.

Conda comes with both and it's just a package manager.

## Install Anaconda

Hm. It also comes with R. I have nothing against R. What I am opposed to right now is learning a new programming language. Learning a new language takes time. And I've already made the commitment to learn Python.

I downloaded the Anaconda Individual Edition and used the gui installer.

Anaconda is successfully installed. And at the end of the installation there's two links for me to start learning more about it:
[Quick Start Guide](https://www.anaconda.com/products/individual/installation-success?source=osx_installer)

I have no idea what Anaconda Nucleus is. I don't think I need it right away or if ever. It looks like it's used for cloud sharing data. But that is just a guess.
[Anaconda Nucleus](https://anaconda.cloud/tutorials/getting-started-with-anaconda-individual-edition?source=osx_installer)

## Anaconda is the Winner
Anaconda has both a command line prompt use and GUI called Navigator. The Navigator is the GUI way of using Anaconda. With my Mac, the way to use the command line is to open a terminal and type the command `python`.

That switches the terminal to be a Python command terminal with access to all the Anaconda libraries/tools.

As a note, I have Python 3 installed on my Mac. So I normally have to use `python3` for all my commands on the command line. With Anaconda installed to ope a command prompt I just use `python` command. I don't have preference for one or the other. It's just annoying to get confused and keep typing the wrong command. So I thought that was worth noting.

I had been using Python 2 for a while and switched to Python 3 and every time I went to type `python <some-command>` I would get an error. 

[Go home](/index.html)
