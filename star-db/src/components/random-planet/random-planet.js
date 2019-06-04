import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator';
import './random-planet.css';


export default class RandomPlanet extends Component {
    swapiservice = new SwapiService();
    // первое ставим значение нулл
    state = {
        planet: {},
        loading: true
        
        


    };
    // когда этот метод вызван это значить гарантирова вызван на сттараницу и отрисован в дом
    // короче вместо конструктора
    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(() => {
            this.updatePlanet();
        }, 2500);
        
    }
    componentWillMount(){
        clearInterval(this.interval);
    }

    onPlanetloader = (planet) => {
        this.setState({
             planet,
             loading: false,
             error: false
         });
    };
    onError = (err) => {
        this.state({
            error: true,
            loading: false
            
        })
    }
    //3 получить данные с сервера 
    updatePlanet=() =>{

        const id =  Math.floor(Math.random()*17) + 2;
        this.swapiservice
        .getPlanet(id)
        .then(this.onPlanetloader)
        // ошибки
        .catch(this.onError);
    };

    render() {
        // втрое диструктуризируем на стейт
        const { planet,loading, error } = this.state;
       
           const hasData = !(loading || error);
        

        const errorMessage = error ? <ErrorIndicator/> : null ;
         // добавляем лоудер условия полностью противоположны
       const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet} />: null;
        return (
            <div className="random-planet jumbotron rounded">
            {errorMessage}
            {spinner}
            {content}
            </div>

        );
    }
}

const PlanetView = ({planet})=> {
    const {  id, name, population, rotationPeriod, diameter } = planet;

   return(
       // груперует 2 элеманта 
       <React.Fragment>
       <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
       <div>
           <h4>{name}</h4>
           <ul className="list-group list-group-flush">
               <li className="list-group-item">
                   <span className="term">Population</span>
                   <span>{population}</span>
               </li>
               <li className="list-group-item">
                   <span className="term">Rotation Period</span>
                   <span>{rotationPeriod}</span>
               </li>
               <li className="list-group-item">
                   <span className="term">Diameter</span>
                   <span>{diameter}</span>
               </li>
           </ul>
       </div>
           </React.Fragment>
   )
}