package juntas.service.impl;

import juntas.dto.vehicle.VehicleRequestDto;
import juntas.dto.vehicle.VehicleResponseDto;
import juntas.exception.ResourceNotFoundException;
import juntas.mapper.GenericMapper;
import juntas.model.Vehicle;
import juntas.repository.VehicleRepository;
import juntas.service.IVehicleService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class VehicleServiceImpl implements IVehicleService {

    private final GenericMapper mapper;
    private final VehicleRepository repository;


    @Override
    public VehicleResponseDto create(VehicleRequestDto request) {
        Vehicle vehicle = mapper.map(request, Vehicle.class);

        return mapper.map(repository.save(vehicle), VehicleResponseDto.class);
    }

    @Override
    public VehicleResponseDto update(Long id,VehicleRequestDto request) {
        Vehicle vehicle = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));

        vehicle.setVehicleColor(request.getVehicleColor());
        vehicle.setEmptySeats(request.getEmptySeats());
        vehicle.setPrimaryBrand(request.getPrimaryBrand());
        vehicle.setModelName(request.getModelName());
        vehicle.setPatentNumber(request.getPatentNumber());
        vehicle.setIsVerified(request.getIsVerified());

        return mapper.map(repository.save(vehicle), VehicleResponseDto.class);
    }

    @Override
    public VehicleResponseDto getById(Long id){
        Vehicle vehicle = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        return mapper.map(vehicle,VehicleResponseDto.class);
    }

    @Override
    public void delete(Long id){
        Vehicle vehicle = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        repository.delete(vehicle);
    }

}
