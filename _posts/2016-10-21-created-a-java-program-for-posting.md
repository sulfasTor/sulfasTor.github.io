---
layout: sulfastor-homepage
title: Created a Java program to automatically create a post format
date: 2016/10/21 14:06:29
---
<p><p>I just created a Java program to automatically create a post. A GUI makes it look better. </p>

This is how it looks: <br>
<img width="30%" src="/images/gui.png"><br>

Here it is the code:

<pre style='color:#000000;background:#ffffff;'><span style='color:#7f0055; font-weight:bold; '>import</span><span style='color:#7f0055; '> java</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>util</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>Date</span><span style='color:#7f0055; '>;</span>
<span style='color:#7f0055; font-weight:bold; '>import</span><span style='color:#7f0055; '> java</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>text</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>DateFormat</span><span style='color:#7f0055; '>;</span>
<span style='color:#7f0055; font-weight:bold; '>import</span><span style='color:#7f0055; '> java</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>text</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>SimpleDateFormat</span><span style='color:#7f0055; '>;</span>
<span style='color:#7f0055; font-weight:bold; '>import</span><span style='color:#7f0055; '> java</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>util</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>Scanner</span><span style='color:#7f0055; '>;</span>
<span style='color:#7f0055; font-weight:bold; '>import</span><span style='color:#7f0055; '> java</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>io</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>PrintWriter</span><span style='color:#7f0055; '>;</span>
<span style='color:#7f0055; font-weight:bold; '>import</span><span style='color:#7f0055; '> java</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>io</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>IOException</span><span style='color:#7f0055; '>;</span>
<span style='color:#7f0055; font-weight:bold; '>import</span><span style='color:#7f0055; '> javax</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>swing</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; font-weight:bold; '>*</span><span style='color:#7f0055; '>;</span>
<span style='color:#7f0055; font-weight:bold; '>import</span><span style='color:#7f0055; '> java</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>awt</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; font-weight:bold; '>*</span><span style='color:#7f0055; '>;</span>
<span style='color:#7f0055; font-weight:bold; '>import</span><span style='color:#7f0055; '> java</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>awt</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; '>event</span><span style='color:#7f0055; '>.</span><span style='color:#7f0055; font-weight:bold; '>*</span><span style='color:#7f0055; '>;</span>

<span style='color:#7f0055; font-weight:bold; '>public</span> <span style='color:#7f0055; font-weight:bold; '>class</span> Post <span style='color:#7f0055; font-weight:bold; '>extends</span> JFrame <span style='color:#7f0055; font-weight:bold; '>implements</span> ActionListener{


	<span style='color:#3f7f59; '>//GUI THINGS</span>
	JPanel pl = <span style='color:#7f0055; font-weight:bold; '>new</span> JPanel();
	JTextField tfLayout = <span style='color:#7f0055; font-weight:bold; '>new</span> JTextField(<span style='color:#2a00ff; '>"layout: sulfastor-homepage"</span>, 20);
	JTextField tfTitle = <span style='color:#7f0055; font-weight:bold; '>new</span> JTextField(<span style='color:#2a00ff; '>"title:"</span>, 20);
	JTextField tffl = <span style='color:#7f0055; font-weight:bold; '>new</span> JTextField(<span style='color:#2a00ff; '>"filename"</span>, 20);
	JTextArea tfDes = <span style='color:#7f0055; font-weight:bold; '>new</span> JTextArea(<span style='color:#2a00ff; '>"Text"</span>,10,20);
	JButton b1 = <span style='color:#7f0055; font-weight:bold; '>new</span> JButton(<span style='color:#2a00ff; '>"Post immediately"</span>);
	<span style='color:#3f7f59; '>//JButton b2 = new JButton("Only save");</span>

	
	<span style='color:#7f0055; font-weight:bold; '>String</span> filename = <span style='color:#2a00ff; '>"/path/to/_posts/folder"</span>;
	<span style='color:#7f0055; font-weight:bold; '>PrintWriter</span> pw = <span style='color:#7f0055; font-weight:bold; '>null</span>;
	Scanner sc = <span style='color:#7f0055; font-weight:bold; '>new</span> Scanner(<span style='color:#7f0055; font-weight:bold; '>System</span>.in);
	<span style='color:#7f0055; font-weight:bold; '>DateFormat</span> df = <span style='color:#7f0055; font-weight:bold; '>new</span> <span style='color:#7f0055; font-weight:bold; '>SimpleDateFormat</span>(<span style='color:#2a00ff; '>"yyyy/MM/dd HH:mm:ss"</span>);
	<span style='color:#7f0055; font-weight:bold; '>String</span> layout = <span style='color:#2a00ff; '>"sulfastor-homepage"</span>;
	<span style='color:#7f0055; font-weight:bold; '>String</span> title = <span style='color:#2a00ff; '>""</span>;
	<span style='color:#7f0055; font-weight:bold; '>String</span> description = <span style='color:#2a00ff; '>""</span>;
	<span style='color:#7f0055; font-weight:bold; '>Date</span> date = <span style='color:#7f0055; font-weight:bold; '>new</span> <span style='color:#7f0055; font-weight:bold; '>Date</span>();
	<span style='color:#7f0055; font-weight:bold; '>String</span> actualdate = df.format(date);
	JTextField tfDate = <span style='color:#7f0055; font-weight:bold; '>new</span> JTextField(<span style='color:#2a00ff; '>"date: "</span> + actualdate);
	<span style='color:#7f0055; font-weight:bold; '>String</span> format;

	<span style='color:#7f0055; font-weight:bold; '>public</span> Post(){

		<span style='color:#7f0055; font-weight:bold; '>super</span>(<span style='color:#2a00ff; '>"Nouveau post"</span>);
		filename += <span style='color:#7f0055; font-weight:bold; '>new</span> <span style='color:#7f0055; font-weight:bold; '>SimpleDateFormat</span>(<span style='color:#2a00ff; '>"yyyy-MM-dd"</span>).format(<span style='color:#7f0055; font-weight:bold; '>new</span> <span style='color:#7f0055; font-weight:bold; '>Date</span>()) + <span style='color:#2a00ff; '>"-"</span>;
		setContentPane(pl);
		<span style='color:#3f7f59; '>//setLayout(new GridLayout(5,1));</span>
		tfDes.setLineWrap(<span style='color:#7f0055; font-weight:bold; '>true</span>);
		tfDes.setWrapStyleWord(<span style='color:#7f0055; font-weight:bold; '>true</span>);
		pl.add(tffl);
		pl.add(tfLayout);
		pl.add(tfTitle);
		pl.add(tfDate);
		pl.add(tfDes);
		pl.add(b1);
		
		b1.addActionListener(<span style='color:#7f0055; font-weight:bold; '>this</span>);
		
	}

	<span style='color:#7f0055; font-weight:bold; '>public</span> <span style='color:#7f0055; font-weight:bold; '>static</span> <span style='color:#7f0055; font-weight:bold; '>void</span> main(<span style='color:#7f0055; font-weight:bold; '>String</span>[] args){
		
		Post window = <span style='color:#7f0055; font-weight:bold; '>new</span> Post();
		window.pack();
		window.setLocationRelativeTo(<span style='color:#7f0055; font-weight:bold; '>null</span>);
		window.setSize(400, 300);
		window.setVisible(<span style='color:#7f0055; font-weight:bold; '>true</span>);
	    
	}

	<span style='color:#7f0055; font-weight:bold; '>public</span> <span style='color:#7f0055; font-weight:bold; '>void</span> actionPerformed(<span style='color:#7f0055; font-weight:bold; '>ActionEvent</span> ae){
					
		layout = tfLayout.getText();
		filename += tffl.getText() + <span style='color:#2a00ff; '>".md"</span>;
		title = tfTitle.getText();
		description = tfDes.getText();
		actualdate = tfDate.getText();

		format = <span style='color:#2a00ff; '>"---</span><span style='color:#2a00ff; '>\n</span><span style='color:#2a00ff; '>"</span> + layout + <span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>\n</span><span style='color:#2a00ff; '>"</span> + title + <span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>\n</span><span style='color:#2a00ff; '>"</span> + actualdate +
			<span style='color:#2a00ff; '>"</span><span style='color:#2a00ff; '>\n</span><span style='color:#2a00ff; '>---</span><span style='color:#2a00ff; '>\n</span><span style='color:#2a00ff; '>&lt;p>"</span> + description + <span style='color:#2a00ff; '>"&lt;/p>"</span>;

		<span style='color:#7f0055; font-weight:bold; '>try</span>{
			pw = <span style='color:#7f0055; font-weight:bold; '>new</span> <span style='color:#7f0055; font-weight:bold; '>PrintWriter</span>(filename, <span style='color:#2a00ff; '>"UTF-8"</span>);
		}<span style='color:#7f0055; font-weight:bold; '>catch</span>(<span style='color:#7f0055; font-weight:bold; '>IOException</span> io){
			<span style='color:#7f0055; font-weight:bold; '>System</span>.out.println(<span style='color:#2a00ff; '>"ERROR while creating the file"</span>);
		}
	
		pw.print(format);
		pw.close();

		JOptionPane.showMessageDialog(<span style='color:#7f0055; font-weight:bold; '>this</span>, <span style='color:#2a00ff; '>"Sucesssfully created a post."</span>);
		<span style='color:#7f0055; font-weight:bold; '>this</span>.dispose();
		    
	}
    
}
</pre>