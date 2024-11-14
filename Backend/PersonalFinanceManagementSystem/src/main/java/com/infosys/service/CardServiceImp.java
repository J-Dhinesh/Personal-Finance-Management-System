package com.infosys.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.infosys.entity.Card;
import com.infosys.repo.CardRepo;

@Service
public class CardServiceImp implements CardService {
	
	@Autowired private CardRepo cardRepo;
	@Override
	public Card saveCard(Card card) {
		return cardRepo.save(card);
	}
	
	@Override
	public List<Card> getCardsByUsername(String username){
		return cardRepo.findByUsername(username);
	}
}
