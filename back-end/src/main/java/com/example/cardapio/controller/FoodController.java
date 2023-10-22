package com.example.cardapio.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.cardapio.food.Food;
import com.example.cardapio.food.FoodRepository;
import com.example.cardapio.food.FoodRequestDTO;

@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data){
        Food foodData = new Food(data);
        repository.save(foodData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<Food> getAll(){

        return repository.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @Transactional
    @PutMapping()
    public Food update(@RequestBody Food data) {

        Optional<Food> foodData = repository.findById(data.getId());
        
        if(foodData.isEmpty()) {
            return null;
        }

        Food foodTransactional = foodData.get();
        foodTransactional.setImage(data.getImage());
        foodTransactional.setPrice(data.getPrice());
        foodTransactional.setTitle(data.getTitle());

        return foodTransactional;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping
    public Food delete(@RequestParam(name = "id") Long id){

        Optional<Food> foodData = repository.findById(id);
        
        if(foodData.isEmpty()) {
            return null;
        }

        repository.deleteById(id);

        return foodData.get();
    }

}
