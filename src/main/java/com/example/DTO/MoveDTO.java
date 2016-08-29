package com.example.DTO;

import com.example.enums.GameStatus;
import com.example.enums.Piece;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

/**
 * Created by patrycja on 08.07.16.
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MoveDTO {

    private int boardColumn;
    private int boardRow;
    private Date created;
    private String userName;
    private GameStatus gameStatus;
    private Piece playerPieceCode;
}
