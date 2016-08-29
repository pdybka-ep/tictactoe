package com.example.controller;

import com.example.DTO.PlayerDTO;
import com.example.domain.Player;
import com.example.service.PlayerService;
import com.example.service.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


/**
 * Created by pdybka on 27.05.16.
 */

@RestController
@RequestMapping("/player")
public class PlayerController {

    @Autowired
    PlayerService playerService;


    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Player createAccount(@RequestBody PlayerDTO newPlayerDTO) {
        Player newPlayer = playerService.createNewPlayer(newPlayerDTO);
        return newPlayer;
    }

    @RequestMapping(value = "/players", method = RequestMethod.GET)
    public void getPlayers() {
        playerService.listPlayers();}

    @RequestMapping(value = "/logged", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Response<Player> getLoggedPlayer() {
        return new Response<>(playerService.getLoggedUser(), Response.Status.CREATED );
    }


}


