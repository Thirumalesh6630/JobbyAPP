.all-jobs-section {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
}

.horizontal-line {
  width: 100%;
  margin: 20px 0;
}

.profile-and-filters-container {
  display: flex;
  flex-direction: column;
  width: 25%; /* Adjusted to take less space */
  margin-right: 20px; /* Added spacing to the right */
}

.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #272727;
  height: 35px;
  border: 0.5px solid #7e858e;
  border-radius: 6px;
  margin-bottom: 20px; /* Increased margin */
}

.search-input {
  color: #ffffff;
  width: 100%; /* Full width */
  height: 100%;
  background-color: #000000;
  padding-left: 16px;
  padding-right: 16px;
  border: none;
  border-radius: 6px 0 0 6px;
}

.search-icon-button {
  background-color: transparent;
  border: none;
  padding-left: 18px;
  padding-right: 25px;
}

.search-icon {
  color: #ffffff;
}

.jobs-section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%; /* Adjusted to take more space */
}

.all-jobs-loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.job-section-failure-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
}

.job-section-failure-image {
  width: 100%;
}

.job-section-failure-error {
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
}

.job-section-failure-message {
  text-align: center;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 200;
  margin-top: 0;
}

.job-section-failure-retry-btn {
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #4f46e5;
  border: none;
  padding-left: 21px;
  padding-right: 21px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
}

.job-section-success-view {
  width: 100%; /* Adjusted to take full width */
}

.job-cards-container {
  padding: 0;
  width: 100%; /* Full width */
}

.no-jobs-view {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.no-jobs-img {
  width: 100%;
}

.no-jobs-error {
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
}

.no-jobs-message {
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: 200;
  font-family: 'Roboto';
  margin-top: 0;
}
