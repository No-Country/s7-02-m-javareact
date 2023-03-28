package juntas.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private Integer dni;

    private String name;
    private String lastName;
    private String profileImage;
    private String password;
    private LocalDate birthdayDate;
    private LocalDate registerDate;
    private Boolean isConfirmedEmail;
    private Boolean hasConfirmedDni;

    @OneToMany
    private List<Qualification> qualifications;
    @OneToOne
    private Role role;

    @PrePersist
    public void prePersist(){
        this.registerDate = LocalDate.now();
        this.hasConfirmedDni = true;
        this.isConfirmedEmail = false;
        this.qualifications = new ArrayList<>();
    }
}
