
public string CatStrings(string p1)  
                {
                   console.log(p1)
                    return p1;
                    
                }
public string CatStrings(string p1, int p2) 
         {return p1+p2.ToString();}
public string CatStrings(string p1, int p2, bool p3)
 {return p1+p2.ToString()+p3.ToString();}

CatStrings("one");        // result = one
CatStrings("one",2);      // result = one2
CatStrings("one",2,true); // result = one2true

