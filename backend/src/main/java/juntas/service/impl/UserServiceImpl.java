package juntas.service.impl;

import juntas.dto.user.UserRequestDto;
import juntas.dto.user.UserResponseDto;
import juntas.exception.ResourceAlreadyExistsException;
import juntas.exception.ResourceNotFoundException;
import juntas.model.User;
import juntas.repository.UserRepository;
import juntas.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final UserRepository repository;

    @Override
    public UserResponseDto register(UserRequestDto dto) {

        if(!existsByEmail(dto.email()) && !existsByDni(dto.dni())){



        } else {
            throw new ResourceAlreadyExistsException("message");
        }

        return null;
    }

    @Override
    public User findByEmail(String email) {
        return repository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("message"));
    }

    @Override
    public boolean existsByEmail(String email) {
        return repository.existsByEmail(email);
    }

    @Override
    public boolean existsByDni(Integer dni) {
        return repository.existsByDni(dni);
    }
}
