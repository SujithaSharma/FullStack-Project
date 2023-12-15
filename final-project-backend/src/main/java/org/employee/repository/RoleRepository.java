package org.employee.repository;

import java.util.Optional;

import org.employee.model.RoleUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleUser, Long>{
	Optional<RoleUser> findByName(String name);
}
