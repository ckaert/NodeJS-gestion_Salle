
class Salle
{
    constructor(Nom,Effectif_Max)
    {
        this.Nom=Nom;
        this.Effectif_Max=Effectif_Max;
    }

    Afficher(){
        console.log( this.Nom,this.Effectif_Max);
    }
}



/*function Salluer()
{
    console.log("coucou");
}*/


module.exports={// ts maintsy atao aty ambany , listena izay zavtr tiana exportena d amzay hitany ly fichier haf
    Salle,

    };