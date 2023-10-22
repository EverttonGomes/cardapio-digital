package com.example.cardapio.food;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Table(name = "foods")
@Entity(name = "foods")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Food {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    private Integer price;

    private String image;

    public Food(FoodRequestDTO data){
        this.title = data.title();
        this.price = data.price();
        this.image = data.image();
    }
}
