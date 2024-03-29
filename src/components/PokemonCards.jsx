import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PokemonType from "./PokemonType";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card style={{ width: 300, margin: 10, background: "#232323" }}>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0,
        }}
      >
        <div className="bg-pokeball"></div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#313131",
            marginBottom: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={pokemon.image}
            alt={pokemon.name}
            style={{ maxWidth: "100%", maxHeight: 150, zIndex: 2 }}
          />
        </div>
        <Typography
          variant="h5"
          component="div"
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Roboto Flex",
            background: "#232323",
            padding: 2.5,
            zIndex: 2,
            width: "100%",
          }}
        >
          <div style={{display:'flex', justifyContent:"space-between", padding:'0 20px'}}>
            <span>{pokemon.name}</span>
            <span style={{ opacity: "25%" }}> #{pokemon.number} </span>
          </div>
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          {pokemon.types.map((type, typeIndex) => (
            <PokemonType key={typeIndex} type={type} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PokemonCard;
