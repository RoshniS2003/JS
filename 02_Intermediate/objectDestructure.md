# Object Destructure
alias (Meaning : rename, reference name or shortname)
eg : suppose Student has (name, id, dob, )

```
student = {
        name: "Rani",
        age :23,
        dob: 08-07-2000,
    }
```
    

    
then 
In dbms we use select ```Student as S ``(shortname or alias) then ->
we can access it by shortname 
```(alias) = S.name, S.id , S. dob ```

means we give it a short name so that wedon't have to write full name everytime    


### Now in object destructe in JavaScript

#### first method
```const {name} = Studnet;```

it will search 'name' in Student object  if present then, assign it to Student.name
means Now ->
``` name = Student.name ```

Now i can simply use 'name' as Variable

#### 2nd Method 
```const  name = student.name``` 

here we assign new name to the variable of object means we give name according to us


## Note :-
Jab hame variable ko as it is use karna ho jaise object me diya ho to ham Method 1 use karenge 
 
agar variable name apne according chahiye to method 2