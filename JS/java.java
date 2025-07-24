import java.util.*;
class Sub
{
	String trainer ="Pranav";
}
class Java extends Sub
{
	String subject="Java";
}
class SQL extends Sub
{
	String subject="SQL";
}
class Web extends Sub
{
	String subject="Web";
}
class Qspiders
{
	static Scanner sc=new Scanner(System.in);
	public static void main(String [] args)
	{
		Sub ref=null;
		System.out.println("1.Java\n2.SQL\n3.Web");
		System.out.print("Enter choice : ");
		int choice=sc.nextInt();
		switch(choice)
		{
			case 1:	ref=new Java();break;
			case 2: ref=new SQL();break;
			case 3: ref=new Web();break;
		}
		System.out.println("Trainer : "+ref.trainer);
		if(ref instanceof Java)
		{
			Java java=(Java)ref;
			System.out.println("Subject : "+java.subject);
		}
		else if(ref instanceof SQL)
		{
			SQL sql=(SQL)ref;
			System.out.println("Subject : "+sql.subject);	
		}
		else if(ref instanceof Web)
		{
			Web web=(Web)ref;
			System.out.println("Subject : "+web.subject);
		}
	}
}
