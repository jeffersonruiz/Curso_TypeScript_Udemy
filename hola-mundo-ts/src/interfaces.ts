interface Animal {
    name: string;
    caminar(): void;
}

class Caballo implements Animal {
    name: string = "Rocinante";
    caminar(): void {
        console.log("Caminando...");
    }

}