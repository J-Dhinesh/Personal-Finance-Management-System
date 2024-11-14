package com.infosys.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Card {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String username;
	private String cardNumber;
	private String cardHolder;
	private String expiryDate;
	private String cvv;
	private int amount;
	
	// PUBLIC DEFAULT CONSTRUCTOR
	
	public Card() {
		super();
	}
	
	
	// PUBLIC PARAMETERIZED CONSTRUCTOR
	
	public Card(int id, String username, String cardNumber, String cardHolder, String expiryDate, String cvv,int amount) {
		super();
		this.id = id;
		this.username = username;
		this.cardNumber = cardNumber;
		this.cardHolder = cardHolder;
		this.expiryDate = expiryDate;
		this.cvv = cvv;
		this.amount=amount;
	}
	
	// SETTERS AND GETTERS
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}
	public String getCardHolder() {
		return cardHolder;
	}
	public void setCardHolder(String cardHolder) {
		this.cardHolder = cardHolder;
	}
	public String getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}
	public String getCvv() {
		return cvv;
	}
	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount=amount;
	}

	// TO STRING METHODS
	@Override
	public String toString() {
		return "Card [id=" + id + ", username=" + username + ", cardNumber=" + cardNumber + ", cardHolder=" + cardHolder
				+ ", expiryDate=" + expiryDate + ", cvv=" + cvv + ", amount=" + amount + "]";
	}

	
	
	
	
	
	
	
	
}
