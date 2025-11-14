import AppTitle from '../AppTitle'
import ListItem from '../ListItem'
import './style.css'

export default function ZodiacSigns(){
    return(
        <div>
            <AppTitle />
            <div className="lista">
                <ListItem signo="Aquário" imagem="assets/aquario.jpg" 
                    dataInicio="21/01" dataFim="19/02"/>
                <ListItem signo="Peixes" imagem="assets/peixes.jpg" 
                    dataInicio="20/02" dataFim="20/03"/>
                <ListItem signo="Áries" imagem="assets/aries.jpg" 
                    dataInicio="21/03" dataFim="20/04"/>
                <ListItem signo="Touro" imagem="assets/touro.jpg" 
                    dataInicio="21/04" dataFim="21/05"/>
                <ListItem signo="Gêmeos" imagem="assets/gemeos.jpg" 
                    dataInicio="22/05" dataFim="21/06"/>
                <ListItem signo="Câncer" imagem="assets/cancer.jpg" 
                    dataInicio="22/06" dataFim="23/07"/>
                <ListItem signo="Leão" imagem="assets/leao.jpg" 
                    dataInicio="24/07" dataFim="23/08"/>
                <ListItem signo="Virgem" imagem="assets/virgem.jpg" 
                    dataInicio="24/08" dataFim="23/09"/>
                <ListItem signo="Libra" imagem="assets/libra.jpg" 
                    dataInicio="24/09" dataFim="23/10"/>
                <ListItem signo="Escorpião" imagem="assets/escorpiao.jpg" 
                    dataInicio="24/10" dataFim="22/11"/>
                <ListItem signo="Sagitário" imagem="assets/sagitario.jpg" 
                    dataInicio="23/11" dataFim="21/12"/>
                <ListItem signo="Capricórnio" imagem="assets/capricornio.jpg" 
                    dataInicio="22/12" dataFim="20/01"/>
            </div>
        </div>
    )
}
