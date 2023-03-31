package juntas.controller;

import juntas.dto.place.PlaceRequestDto;
import juntas.dto.place.PlaceResponseDto;
import juntas.exception.ResourceEmptyOrNullException;
import juntas.exception.ResourceNotFoundException;
import juntas.service.IPlaceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/places")
public record PlaceController(IPlaceService placeService) {
    private static final Logger logger = LoggerFactory.getLogger(PlaceController.class);
    @PostMapping
    public ResponseEntity<PlaceResponseDto> createPlace(@RequestBody PlaceRequestDto toCreate) {
        PlaceResponseDto response = null;
        try {
            response = placeService.createPlace(toCreate);
        } catch (ResourceEmptyOrNullException e) {
            logger.error(e.getMessage());
        }
        return new ResponseEntity<>(
                response,
                response == null ? HttpStatus.NO_CONTENT : HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<PlaceResponseDto> updatePlace(@PathVariable Long id, @RequestBody PlaceRequestDto toUpdate) {
        PlaceResponseDto response = null;
        try {
            response = placeService.updatePlace(id, toUpdate);
        } catch (ResourceNotFoundException e) {
            logger.error(e.getMessage());
        }
        return new ResponseEntity<>(
                response,
                response == null ? HttpStatus.NO_CONTENT : HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlaceResponseDto> findById(@PathVariable Long id){
        PlaceResponseDto response = null;
        try {
            response = placeService.findById(id);
        } catch (ResourceNotFoundException e) {
            logger.error(e.getMessage());
        }
        return new ResponseEntity<>(
                response,
                response == null ? HttpStatus.NO_CONTENT : HttpStatus.OK);
    }

    @GetMapping("/city")
    public ResponseEntity<List<PlaceResponseDto>> findByCity(@RequestParam String city){
        List<PlaceResponseDto> places = new java.util.ArrayList<>(Collections.emptyList());
        try {
            places.addAll(placeService.findByCity(city));
        } catch (ResourceNotFoundException e) {
            logger.error(e.getMessage() + " or the " + city + " is not encountered ");
        }
        return new ResponseEntity<>(
                places,
                places.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.FOUND);
    }
    @GetMapping("/province")
    public ResponseEntity<List<PlaceResponseDto>> findByProvince(@RequestParam String province){
        List<PlaceResponseDto> places = new java.util.ArrayList<>(Collections.emptyList());
        try {
            places.addAll(placeService.findByProvince(province));
        } catch (ResourceNotFoundException e) {
            logger.error(e.getMessage() + " or the " + province + " is not encountered ");
        }
        return new ResponseEntity<>(
                places,
                places.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.FOUND);
    }

    @DeleteMapping("/{id}")
    public void deletePlace(@PathVariable Long id) {
        placeService.deletePlace(id);
    }
}
