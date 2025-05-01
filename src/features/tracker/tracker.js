import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'
import FoodItems from './food-item';
import Calendar from 'react-calendar';
import CloseIcon from '@mui/icons-material/Close';
import '../../App.css';
import { addDiet, getDietByDate, getDietTarget, updateDiet } from '../../db';

const dummyDiet = {
    total: {
        protein: 0,
        carbs: 0,
        fat: 0,
        calorie: 0
    },
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
}

const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1250px;
    margin: 30px auto;
    align-items: flex-start;
    .dietHolder {
        flex-basis: 75%;
        padding-left: 30px;
        h1 {
            font-size: 30px;
            display: flex;
            align-items: center;
            strong {
                color: #0063ea;
                font-size: 30px;
                letter-spacing: -1px;
            }
            .totalNutrition {
                border-left: 1px solid #ccc;
                margin-left: 20px;
                padding-left: 10px;
                span {
                    border: 1px solid #ccc;
                    padding: 3px 5px;
                    background-color: #eee;
                    border-radius: 4px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 0 0 10px;
                }
                .pro {
                    border-color: #e21975 !important;
                    background-color: #ffdced !important;
                }
                .fat {
                    border-color: #6008bc !important;
                    background-color: #e8cdff !important;
                }
                .carbs {
                    border-color: #017cc1 !important;
                    background-color: #b1e3ff !important;
                }
            }
        }
        .sectionTitle {
            text-transform: capitalize;
            font-size: 18px;
            margin: 20px 0 5px;
            display: flex;
            flex-direction: column; 
            .select {
                width: 500px;
            }
        }
    }
    .calendar {
        flex-basis: 25%;
        min-width: 150px;
        h2.targetTitle {
            flex-basis: 100%;
            font-size: 20px;
            font-weight: 900;
            margin: 20px 0 10px;
        }
        .targetSection {
            margin-top: 0px;
            display: flex;
            flex-wrap: wrap;
            border: 1px solid #111;
            border-radius: 4px;
            padding: 10px 0 0 10px;
                
            h3 {
                margin-bottom: 13px;
                font-size: 25px;
                font-weight: 900;
                width: 25%;
            }
             p {
                font-weight: 400;
                font-size: 15px;
            }
        }
    }
    .dietSection {
         ul.food-items {
            padding-left: 20px;
            counter-reset: section;
            margin-top: 20px;
            li {
                display: flex;
                margin-bottom: 7px;
                h3 {
                    font-weight: 400;
                };
                :before {
                    counter-increment: section;
                    content: counter(section) ": ";
                    margin-right: 5px;
                }
                .close {
                    font-size: 20px;
                    margin-left: 10px;
                    fill: #f00;
                    cursor: pointer;
                    display: none;
                }
            } 
            li:hover .close {
                display: block;
            }
        }
        .nutrition {
            margin-left: 20px;
        }
    }
`;

function Tracker() {
    const [diet, setDiet] = useState({...dummyDiet})
    const [date, onChange] = useState(new Date().toLocaleDateString());
     const [target, setTarget] = useState({
            calorie: '',
            protein: '',
            carbs: '',
            fat: '',
        })


    function fetchDiet(date){
        getDietByDate(date).then(res => {
        setDiet(res && res.length > 0 ? res[0] : {...dummyDiet})
    })
    }

    useEffect(() => {
        fetchDiet(date);
        getDietTarget().then(res => {
            console.log(res, "((((((((((")
            setTarget({...res[0]})
    });
    }, [date])
    

    const {
        protein: totalProtein, 
        calorie: totalCalorie, 
        fat:totalFat, 
        carbs:totalCarbs
    } = diet?.total

    function handleAddDeleteItem(foodItem, item, index ){
        const calculatedDiet = {...diet}
        let { protein, carbs, fat, calorie } = calculatedDiet.total
        
        if(foodItem?.name) {
            calculatedDiet[item] = [...calculatedDiet[item], foodItem ]
            calculatedDiet.total = { 
                protein: protein + foodItem?.protein,
                carbs: carbs + foodItem?.carbs,
                fat: fat + foodItem?.carbs,
                calorie: calorie + foodItem?.calorie 
            }
        } else {
            calculatedDiet[item].splice(index, 1)
            calculatedDiet.total = { 
                protein: protein - foodItem?.protein,
                carbs: carbs - foodItem?.carbs,
                fat: fat - foodItem?.carbs,
                calorie: calorie - foodItem?.calorie 
            }
        }
        setDiet(calculatedDiet);
        // monthDiet[date] = calculatedDiet
        if(calculatedDiet?.id && calculatedDiet?.date){
            updateDiet({...calculatedDiet})
        } else {
            addDiet({...calculatedDiet, date: date})
        }
        
    }
    
    console.log(target, "*************" )

  return (
    <StyledSection>
        <div className='calendar'>
        <Calendar onChange={(val) => onChange(val.toLocaleDateString())} value={date} />
        <h2 className='targetTitle'>Target:</h2>
            {target?.calorie && (
                <div className='targetSection'>
                    
                    {target?.calorie && (
                        <h3>{target?.calorie}<p>Calorie</p></h3>
                    )}
                    {target?.protein && (
                        <h3>{target?.protein}<p>Protein</p></h3>
                    )}
                    {target?.carbs && (
                        <h3>{target?.carbs}<p>Carbs</p></h3>
                    )}
                    {target?.fat && (
                        <h3>{target?.fat}<p>Fat</p></h3>
                    )}
                </div>
            )}
        </div>
        <div className='dietHolder'>
                <h1>Diet: 
                    {!!totalCalorie && <strong>{totalCalorie} Calories</strong> }
                    <div className='totalNutrition'>
                        {!!totalProtein && <span className='pro'>Protein: {totalProtein}gm</span>}
                        {!!totalCarbs && <span className='carbs'>Carbohydrate: {totalCarbs}gm</span>}
                        {!!totalFat && <span className='fat'>Fat: {totalFat}gm</span>}
                    </div>
                </h1>
                <section className='dietContainer'>
                    {Object.keys(diet).map(item => {
                        if(["id", "total", "date"].includes(item)){
                            return null
                        }
                    return (

                        <div key={item} className='dietSection'>
                            <h2 className='sectionTitle'>{item}: <FoodItems handleAddItem={(foodItem) => handleAddDeleteItem(foodItem, item)} /></h2> 
                            <ul className='food-items'>
                            {diet[item]?.map((i, index) => (
                                    <li key={i?.name}>
                                        <h3>{i?.name}</h3>
                                        <div className='nutrition'>
                                            <p>(P:{i?.protein} / C: {i?.carbs} / F:{i?.fat} - {i?.calorie} kcal)</p>
                                        </div>
                                        <CloseIcon className='close' onClick={ () => handleAddDeleteItem(null, item, index)} />
                                    </li>
                            ))}
                            </ul>
                            
                        </div>
                    ) 
                })
                    }
                </section>
            </div>

    </StyledSection>
  )
}

export default Tracker