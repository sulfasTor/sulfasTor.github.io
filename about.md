---
layout: sulfastor-homepage
title: About
license: CC BY-ND 4.0
permalink: /about/
---

<h1>My shell</h1>

<div class="console">  
<b>sulfasTor@pc:~$</b> mind | grep "who am I?" > about.html <br />
mind: information not found. Still thinking... <br />
<b>sulfasTor@pc:~$</b> ls -a <br />
. &nbsp;&nbsp;&nbsp;&nbsp;  .genius&nbsp;     .intelligence <br />
.. &nbsp;&nbsp;&nbsp; 	    .linux &nbsp;	.proficiency <br />
.gnu &nbsp; Public &nbsp;	.innovation <br />
    .fsf &nbsp;   .games &nbsp; README.md 

    
</div>

<div> <h1>Random code</h1>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%"> 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &quot;portability.h&quot;</span>

<span style="color: #557799">#if HAVE_LINUX_PRCTL_H</span>
<span style="color: #557799">#include &lt;signal.h&gt;</span>

<span style="color: #557799">#include &lt;linux/prctl.h&gt;</span>
<span style="color: #557799">#include &lt;sys/prctl.h&gt;</span>
<span style="color: #557799">#endif</span>

<span style="color: #888888">/*</span>
<span style="color: #888888"> * When called in the engine process before exec, this ensures</span>
<span style="color: #888888"> * the engine is terminated in the event that we crash.</span>
<span style="color: #888888"> */</span>
<span style="color: #333399; font-weight: bold">void</span> <span style="color: #0066BB; font-weight: bold">maybe_kill_orphan_engine</span> ()
{
<span style="color: #557799">#if HAVE_LINUX_PRCTL_H</span>
    prctl (PR_SET_PDEATHSIG, SIGTERM);
<span style="color: #557799">#endif</span>
}
</pre></td></tr></table></div>

