---
Layout: sulfastor-homepage
title: Created a Java program to automatically create a post format
date: 2016/10/21 14:06:29
---
<p><p>I just created a Java program to automatically create a post. A GUI makes it look better. </p>

This is how it looks
<img width="60%" src="/images/GUI.png">

Here it is the code:
{% highlight java %}

import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import java.io.PrintWriter;
import java.io.IOException;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Post extends JFrame implements ActionListener{


	//GUI THINGS
	JPanel pl = new JPanel();
	JTextField tfLayout = new JTextField("Layout: sulfastor-homepage", 20);
	JTextField tfTitle = new JTextField("title:", 20);
	JTextField tffl = new JTextField("filename", 20);
	JTextArea tfDes = new JTextArea("Text",10,20);
	JButton b1 = new JButton("Post immediately");
	//JButton b2 = new JButton("Only save");

	
	String filename = "/path/to/_posts/folder";
	PrintWriter pw = null;
	Scanner sc = new Scanner(System.in);
	DateFormat df = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
	String layout = "sulfastor-homepage";
	String title = "";
	String description = "";
	Date date = new Date();
	String actualdate = df.format(date);
	JTextField tfDate = new JTextField("date: " + actualdate);
	String format;

	public Post(){

		super("Nouveau post");
		filename += new SimpleDateFormat("yyyy-MM-dd").format(new Date()) + "-";
		setContentPane(pl);
		//setLayout(new GridLayout(5,1));
		tfDes.setLineWrap(true);
		tfDes.setWrapStyleWord(true);
		pl.add(tffl);
		pl.add(tfLayout);
		pl.add(tfTitle);
		pl.add(tfDate);
		pl.add(tfDes);
		pl.add(b1);
		
		b1.addActionListener(this);
		
	}

	public static void main(String[] args){
		
		Post window = new Post();
		window.pack();
		window.setLocationRelativeTo(null);
		window.setSize(400, 300);
		window.setVisible(true);
	    
	}

	public void actionPerformed(ActionEvent ae){
					
		layout = tfLayout.getText();
		filename += tffl.getText() + ".md";
		title = tfTitle.getText();
		description = tfDes.getText();
		actualdate = tfDate.getText();

		format = "---\n" + layout + "\n" + title + "\n" + actualdate +
			"\n---\n<p>" + description + "</p>";

		try{
			pw = new PrintWriter(filename, "UTF-8");
		}catch(IOException io){
			System.out.println("ERROR while creating the file");
		}
	
		pw.print(format);
		pw.close();

		JOptionPane.showMessageDialog(this, "Sucesssfully created a post.");
		this.dispose();
		    
	}
    
}

{% endhighlight %}</p>