package juntas.controller;


import juntas.dto.request.VehicleRequestDto;
import juntas.service.IVehicleService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vehicle")
public record VehicleController (IVehicleService service){

@PostMapping
public ResponseEntity<?> create(@RequestBody VehicleRequestDto requestDto){
    return new ResponseEntity<>(service.create(requestDto), HttpStatus.CREATED);
}

@PutMapping("/{id}")
public  ResponseEntity<?> update(@PathVariable Long id, @RequestBody VehicleRequestDto requestDto) {
    return new ResponseEntity<>(service.update(id,requestDto), HttpStatus.OK);
}

@GetMapping("/{id}")
public ResponseEntity<?> getById(@PathVariable Long id){
    return new ResponseEntity<>(service.getById(id), HttpStatus.FOUND);
}

@DeleteMapping("/{id}")
public ResponseEntity<?> delete(@PathVariable Long id){
    service.delete(id);
    return new ResponseEntity<>(HttpStatus.OK);
}

}
