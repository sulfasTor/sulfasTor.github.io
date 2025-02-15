---
layout: sulfastor-homepage
title: Git tricks - credential.helper
excerpt_separator: <!--more-->
date: 2025-02-15 16:45:14
---

TIL credential.helper which makes life easier when authenticating to remote

<!--more-->
# `credential.helper`
[credential.helper](https://git-scm.com/docs/gitcredentials) is a git configuration which allows you to provide username and passwords to git. 
This is essential when you need to perform operations against a remote like pulling or pushing code.

Basically you define something like this:
```bash
git config credential.https://example.com.username myusername
git config credential.helper "$helper $options"
```
Git will use that to authenticate to your remote before performing any remote action.

# Using callbacks
`$helper` is a callback function or a shell command. This is really cool because you can define something like this in your `.gitconfig`:
```bash
[credential "https://github.com"]
        helper =
        helper = !/usr/bin/gh auth git-credential
[credential "https://gist.github.com"]
        helper =
        helper = !/usr/bin/gh auth git-credential
```
And git is going to call Github CLI to retrieve credentials. So you don't need to worry anymore about keeping PAT token anymore!

> To make this work you'll require to have gh cli installed and call `gh auth login` before this can work

