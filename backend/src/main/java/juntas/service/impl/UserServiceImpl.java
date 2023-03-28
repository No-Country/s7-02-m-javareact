package juntas.service.impl;

import juntas.dto.user.UserRequestDto;
import juntas.dto.user.UserResponseDto;
import juntas.exception.ResourceAlreadyExistsException;
import juntas.exception.ResourceNotFoundException;
import juntas.mapper.GenericMapper;
import juntas.model.Role;
import juntas.model.User;
import juntas.repository.RoleRepository;
import juntas.repository.UserRepository;
import juntas.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final UserRepository repository;
    private final RoleRepository roleRepository;
    private final GenericMapper mapper;

    @Override
    public UserResponseDto register(UserRequestDto dto) {

        if(existsByEmail(dto.email()) || existsByDni(dto.dni())) {
            throw new ResourceAlreadyExistsException("message");
        }

            User user = mapper.map(dto, User.class);
            Role role = roleRepository.findById(1L).get();

            user.setRole(role);

        return mapper.map(repository.save(user), UserResponseDto.class);
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
