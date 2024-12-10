# **WealthWise - A Personal Finance Management System**

## **Overview**
**Purpose:**  
The project aims to develop a user-friendly web application that simplifies personal finance management, enabling users to effortlessly track their spending, manage budgets, and achieve financial goals.

---

## **Technologies Used**
- **Backend**: Java Spring Boot  
- **Frontend**: ReactJS  
- **Database**: MySQL  

---

## **Key Features**
1. **User Insights on Spending**  
   - View spending visualizations in the form of bar and pie charts.  

2. **Better Budget Management**  
   - Differentiates transactions based on Credit vs Debit for a clear monthly overview.  

3. **Goal Setting**  
   - Set spending goals on the Goal page.  
   - Alerts:  
     - **80% of goal reached**: *"Spend accordingly"*  
     - **100% of goal exceeded**: *"Overspending"*  

4. **Bill Notification**  
   - Notifications for upcoming bills.  

---

## **Setup Instructions**
Follow these steps to get the project running on your local environment:

### **1. Prerequisites**
Make sure you have the following installed:
- **Spring Tool Suite (STS)**
- **Visual Studio Code**
- **MySQL (Workbench or CLI)**
- **Postman** (for API Testing)


### **2. Clone the Repository**
Clone the project repository to your local machine:

```bash
git clone https://github.com/J-Dhinesh/Personal-Finance-Management-System.git
```


### **3. Backend Setup**
Navigate to the backend folder:

```bash
cd Backend/PersonalFinanceManagementSystem
```
Install dependencies and start the server:
```bash
# For Linux/macOS
./mvnw spring-boot:run

# For Windows
mvn spring-boot:run
```

### **4. Frontend Setup**
Navigate to the frontend folder:

```bash
cd Frontend/Fintrack
```
Install dependencies and start the React server:

```bash
npm run dev
```

### **5. Database Setup**
#### Create a Database:

Database Name: financedb
Connection String: jdbc:mysql://localhost:3306/financedb

#### Update Database Configuration:
Update the application.properties file in the backend configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/financedb
spring.datasource.username=[your username]
spring.datasource.password=[your password]
```
### 6.Running the Project
  Frontend: Navigate to http://localhost:5173.

  Backend: Access the API at http://localhost:9000.

---
## How to Use
**Login/Signup:** Access the application by creating an account or logging in.

**Add Account**: Add your account for performing transactions.

**Manage Transactions**: Add your transactions for accurate financial tracking.

**Visualize Data:** Access the dashboard to view financial insights.

**Bills and Goals:** Add some bills and goals to do a budget management.

---
**FEEL FREE TO ASK YOUR DOUBT AND INFORM THE BUGS THEREBY IMPROVE THE QUALITY OF THE PROJECT!!**
