import * as firebase from 'firebase'


const ConLinea = {
    ObtenerLineas(e){
        firebase.database().ref('gntDirectorioLineas').once('value').then( snapshot=>{
            let array= []
            if(snapshot.val()!==null){
                array = Object.values( snapshot.val() )
            }
            e.setState({ ListaLineas: array })
        } )
    },
    ObtenerRutaLinea(Linea){
        return firebase.database().ref('gntRuta/'+Linea+'/Ruta').once('value').then( snapshot=>{
            if(snapshot.val()!==null){
                return snapshot.val()
            }else{
                return []
            }
        } )
    },
    ObtenerRutasCercanas(){
        return firebase.database().ref('gntRuta').once('value').then( snapshot=>{
            if(snapshot.val()!==null){
                let result=[ Object.values( snapshot.val() ), Object.keys( snapshot.val() ) ]
                return result
            }else{
                return []
            }
        } )
    }
}

export default ConLinea;