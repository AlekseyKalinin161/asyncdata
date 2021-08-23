import React, {useEffect, useState} from "react";
import SimpleModal from "./modal";
import {Container, Grid} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardHero from "./cardHero";

function CardsPanel({data}) {
    const [isLoading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);
    const [targetCard, setTargetCard] = useState(null);

    useEffect(() => {
        if (Object.keys(data).length !== 0) {
            setLoading(false);
        }
    }, [data]);

    return (
        <Container maxWidth="xl" style={{height: '100%'}}>
            {isLoading ? <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                        style={{height: '100% '}}
                >
                    <CircularProgress/>
                </Grid> :
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    style={{marginTop: '5px'}}
                >
                    {data.arr.map((card, i) =>
                        <CardHero
                            setOpen={setOpen} targetCard={targetCard} setTargetCard={setTargetCard}
                            key={i} img={card.payload.img} text={card.payload.text} title={card.payload.title}
                            card={card}
                        />
                    )}
                </Grid>
            }
            {targetCard &&
            <SimpleModal open={open} setOpen={setOpen} targetCard={targetCard} setTargetCard={setTargetCard}/>}
        </Container>
    );
}

export default CardsPanel;
