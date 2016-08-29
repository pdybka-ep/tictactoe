package com.example.domain;

import lombok.*;

/**
 * Created by pdybka on 27.06.16.
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Position {
    int boardRow;
    int boardColumn;
}
