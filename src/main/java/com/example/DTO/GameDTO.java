package com.example.DTO;

import com.example.domain.Player;
import com.example.enums.GameType;
import com.example.enums.Piece;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Created by pdybka on 31.05.16.
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GameDTO {

    private int id;
    private GameType gameType;
    private Piece piece;
}


