import React, { Component } from 'react';
import Card from '../componentes/card';
import Card_link from '../componentes/card_link';

class Home extends Component {
    render(){
        return (
            <div>
              <section className='imagem-fundo'style={{backgroundImage:'url(img/painel.svg)'}}>
                <div id='inicio' style={{padding:'10%'}} ></div> 
            </section>

            <section className="margem-section" id='disciplinas'>
                <h1 className="border-bottom text-start mb-5 me-2">Disciplinas</h1>
                <div class="row row-cols-2 row-cols-lg-4 justify-content-center g-4">
                    <div class="col d-flex justify-content-center" >
                        <Card link={'/Portugues'} titulo={'PORTUGUÊS E LITERATURA'} cor={"#B3093F"} />
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card  link={'/Portugues'} titulo={'INGLÊS'} cor={"#B3154B"}/>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card link={'/Portugues'} titulo={'ESPANHOL'} cor={"#B22057"}/>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card link={'/Portugues'} titulo={'ARTES'} cor={"#B12C63"}/>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card link={'/Portugues'} titulo={'HISTÓRIA'} cor={"#AF437A"}/>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card link={'/Portugues'} titulo={'GEOGRAFIA'} cor={"#AE4E86"}/>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card link={'/Portugues'} titulo={'FILOSOFIA'} cor={"#AC649D"}/>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card link={'/Portugues'} titulo={'SOCIOLOGIA'} cor={"#AB7BB5"}/>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card link={'/Portugues'} titulo={'QUÍMICA'} cor={"#A991CC"}/>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card link={'/Portugues'} titulo={'FÍSICA'} cor={"#A7A8E3"}/>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card link={'/Portugues'} titulo={'BIOLOGIA'} cor={"#A6B3EF"} />
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card link={'/Portugues'} titulo={'MATEMÁTICA'} cor={"#A5BEFA"} />
                    </div>
                </div>
            </section>
           
            <section className='margem-section' id='redacao'>
            <h1 className="border-bottom text-end mb-5 mt-5 me-2">Redação</h1>
            <div class="row row-cols-1 row-cols-lg-2" >
                <div class="col d-flex justify-content-center aling-items-center">
                    <img src="img/Menina.svg" class="img-fluid" alt="Menina Estudando" width="500px"/>
                </div>
                <div class="col">
                <div class="row row-cols-2 row-cols-lg-2 g-4 justify-content-center">
                    <div class="col d-flex justify-content-center" >
                        <Card link={'/Portugues'} titulo={'AS CINCO COMPETÊNCIAS'} cor={"#B3093F"} />
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card  link={'/Portugues'} titulo={'INTRODUÇÃO'} cor={"#B0376E"}/>
                    </div>
                    <div class="col d-flex justify-content-center" >
                        <Card link={'/Portugues'} titulo={'DESENVOLVIMENTO'} cor={"#AD649D"} />
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Card  link={'/Portugues'} titulo={'CONCLUSÃO'} cor={"#A991CC"}/>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section className="margem-section" id='provas'>
                <h1 className="border-bottom text-start mb-0 mt-5 me-2">Provas</h1>
                
                <h3 className="border-bottom border-top text-start mb-5 mt-0 me-2">ENEM</h3>
                <div className="row row-cols-3 row-cols-lg-6 justify-content-center">
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/drive/folders/1_Z-UiPjdaIk1rRDCuq5x2LEwD6rmiQ80?usp=sharing'} titulo={'2024'} cor={"#B3093F"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/drive/folders/1iCTy8_V3PoSNFr1vuSyQhBrHFelFDvNW?usp=drive_link'} titulo={'2023'} cor={"#B3154B"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/drive/folders/1FEzt_DOIBKRsZk6nXYAKqIba4d-KensX?usp=drive_link'} titulo={'2022'} cor={"#B22057"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/drive/folders/1g4GB9qNsu-7EEHGqsnwNhHFTIOPkX_KC?usp=drive_link'} titulo={'2021'} cor={"#B12C63"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/drive/folders/1_Nj2OrpcLFOY1umusjFpyhj5MvnenccU?usp=drive_link'} titulo={'2020'} cor={"#AF437A"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/drive/folders/1zFdLuZ8HhIkmHhYaFc1XJkX4hRwWuUxq?usp=drive_link'} titulo={'2019'} cor={"#AC649D"} />
                </div>
                </div>

                <h3 className="border-bottom border-top text-end mb-5 mt-5 me-2">Fuvest (USP)</h3>
                <div className="row row-cols-3 row-cols-lg-6 justify-content-center">
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/file/d/18XBdKCY-zZR9uwhO8l4v2MQte1W_t6DT/view?usp=drive_link'} titulo={'2024'} cor={"#B1376F"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/file/d/12yBIUN_WpgNwNS7OlEU1XyhiPNHX0YOf/view?usp=drive_link'} titulo={'2023'} cor={"#AF4E86"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/file/d/1ZPJmcExR2Jon6I1eqDh1Nnxa4WheQv2l/view?usp=drive_link'} titulo={'2022'} cor={"#AD649D"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/file/d/1hNDvCBlmOLUilV5TeqZ8NzpcVsdLCBQf/view?usp=drive_link'} titulo={'2021'} cor={"#AC70A9"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/file/d/1qJVWFS1fMcFTG_ln9nKS6kb1siD4BaZP/view?usp=drive_link'} titulo={'2020'} cor={"#AB7BB5"} />
                </div>
                </div>

                <h3 className="border-bottom border-top text-start mb-5 mt-5 me-2">ITA</h3>
                <div className="row row-cols-3 row-cols-lg-6 justify-content-center">
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/drive/folders/1DTiloVu3hk08f8PqV9Z3Laeg3jxjDyHk?usp=drive_link'} titulo={'2024'} cor={"#A991CC"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/drive/folders/1OQVzy9a8dkmKfnGZkF2uyfopdFZ2ED99?usp=drive_link'} titulo={'2023'} cor={"#A89DD8"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/drive/folders/11Q5r8K4lp1UFzNt1fISYqXisex8Wv5Gx?usp=drive_link'} titulo={'2022'} cor={"#A7A8E3"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/drive/folders/1K_ywiluo_IFuXGBaJ4j07az7ALoIS52h?usp=drive_link'} titulo={'2021'} cor={"#A6B3EF"} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Card_link link={'https://drive.google.com/drive/folders/1giyX0gfVVRPOZiYKROjGJtj0ii28tedq?usp=drive_link'} titulo={'2020'} cor={"#A5BEFA"} />
                </div>
                </div>

            </section>

            </div>
        );
    }
};

export default Home

  
