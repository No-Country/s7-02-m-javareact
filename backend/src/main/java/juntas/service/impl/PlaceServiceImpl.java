package juntas.service.impl;

import juntas.dto.place.PlaceRequestDto;
import juntas.dto.place.PlaceResponseDto;
import juntas.exception.ResourceNotFoundException;
import juntas.mapper.GenericMapper;
import juntas.model.Place;
import juntas.repository.PlaceRepository;
import juntas.service.IPlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlaceServiceImpl implements IPlaceService {

    private final PlaceRepository repository;
    private final GenericMapper mapper;

    @Override
    public PlaceResponseDto createPlace(PlaceRequestDto toCreate) {
        Place newPlace = mapper.map(toCreate, Place.class);
        return mapper.map(repository.save(newPlace), PlaceResponseDto.class);
    }

    @Override
    public PlaceResponseDto updatePlace(Long id, PlaceRequestDto toUpdate) {
        Place updatedPlace = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The place doesn't exist. ")) ;

        updatedPlace.setAddress(toUpdate.address());
        updatedPlace.setCity(toUpdate.city());
        updatedPlace.setProvince(toUpdate.province());
        updatedPlace.setCountry(toUpdate.country());

        return mapper.map(repository.save(updatedPlace), PlaceResponseDto.class);
    }

    @Override
    public PlaceResponseDto findById(Long id) {
        Place place = repository.findById(id).orElseThrow( () -> new ResourceNotFoundException("The place doesn't exist. "));
        return mapper.map(place, PlaceResponseDto.class);
    }

    @Override
    public PlaceResponseDto findByCity(String city)  {
        Place place = repository.findByCity(city).orElseThrow(() -> new ResourceNotFoundException("It cant find the city with the city provided"));
        return mapper.map(place, PlaceResponseDto.class);
    }

    @Override
    public PlaceResponseDto findByProvince(String province) {
        Place place = repository.findByCity(province).orElseThrow(() -> new ResourceNotFoundException("It cant find the province with the province provided"));
        return mapper.map(place, PlaceResponseDto.class);
    }

    @Override
    public void deletePlace(Long id) {
        repository.deleteById(id);
    }
}
