class person {
    img
    name
    mail
    phone
    location
    constructor(img,name,mail,phone,location) {
        this.img=img
        this.name=name;
        this.mail=mail;
        this.phone=phone;
        this.location=location;
    }

    getImg(){
        return this.img;
    }

    getName(){
        return this.name;
    }


    getMail(){
        return this.mail;
    }

    getPhone(){
        return this.phone;
    }
}

export async function generarPersona(personObject){
    return new Promise((resolve, reject) => {
        try {
            let persona=new person(
                personObject.picture.medium,
                personObject.name.first,
                personObject.email,
                personObject.phone,
                personObject.location.state
            ) 
            resolve(persona)
        } catch (error) {
            reject(error);
        }
    });
}