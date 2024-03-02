class DiccionarioUsuarios {
    [id: string]: string;
}

let dic = new DiccionarioUsuarios();

dic.a1 = "usuario uno";
dic["1a"] = "usuario dos";

console.log(dic);
