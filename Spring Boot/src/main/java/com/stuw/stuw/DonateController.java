package com.stuw.stuw;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.dao.DonateDao;
import com.model.Donate;

@RestController
public class DonateController {
	
	@Autowired
	DonateDao ddao;
	
	@PostMapping("/DonarRegistration")
	public String registerDepartment(@RequestBody Donate donar) {

		Donate d = ddao.DonarRegistration(donar);

		if (d != null)
			return "Donar Registered into the Database";

		return "Donar Registeration Failed!!!";
	}

}
