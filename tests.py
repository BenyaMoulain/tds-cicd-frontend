from time import time
import unittest
from pyunitreport import HTMLTestRunner
from selenium import webdriver


class HelloWorld(unittest.TestCase):

    name = 'testname'
    lastname = 'testlastname'
    secondLastname = 'testsecondlastname'
    birthday = '01-01-01'
    email = 'testemail@email.com'
    rut = '18619043-2'
    phone = '56912345678'
    organization = 'testorganization'
    organizationAddress = 'testorganizationaddress'
    organizationPhone = '562123456'
    organizationWeb = 'testorganizationweb.cl'

    def setUp(self):
        self.driver = webdriver.Chrome(executable_path="./chromedriver")
        driver = self.driver
        driver.implicitly_wait(10)

    def test_create_user(self):
        driver = self.driver
        driver.get('http://localhost:3000/')

        driver.find_element_by_id(
            "createButton").click()

        driver.find_element_by_id(
            "addFormNameInput").send_keys(self.name)
        driver.find_element_by_id(
            "addFormLastnameInput").send_keys(self.lastname)
        driver.find_element_by_id(
            "addFormSecondLastnameInput").send_keys(self.secondLastname)
        driver.find_element_by_id(
            "addFormBirthdayInput").send_keys(self.birthday)
        driver.find_element_by_id(
            "addFormEmailInput").send_keys(self.email)
        driver.find_element_by_id(
            "addFormRutInput").send_keys(self.rut)
        driver.find_element_by_id(
            "addFormPhoneInput").send_keys(self.phone)
        driver.find_element_by_id(
            "addFormOrganizationInput").send_keys(self.organization)
        driver.find_element_by_id(
            "addFormOrganizationAddressInput").send_keys(self.organizationAddress)
        driver.find_element_by_id(
            "addFormOrganizationPhoneInput").send_keys(self.organizationPhone)
        driver.find_element_by_id(
            "addFormOrganizationWebInput").send_keys(self.organizationWeb)

        driver.find_element_by_id("addUserButton").click()

        driver.find_element_by_id(
            "createButton").click()

        createdUserRow = driver.find_elements_by_xpath(
            '//*[@id="users"]/tbody/tr')[0]
        nameCell = createdUserRow.find_elements_by_tag_name('td')[1]
        self.assertIn(self.name, nameCell.text)
        driver.find_element_by_id(
            "cancelAddButton").click()
        driver.find_element_by_id(
            "deleteButton").click()

    def test_update_user(self):
        driver = self.driver
        driver.get('http://localhost:3000/')

        driver.find_element_by_id(
            "createButton").click()

        driver.find_element_by_id(
            "addFormNameInput").send_keys(self.name)
        driver.find_element_by_id(
            "addFormLastnameInput").send_keys(self.lastname)
        driver.find_element_by_id(
            "addFormSecondLastnameInput").send_keys(self.secondLastname)
        driver.find_element_by_id(
            "addFormBirthdayInput").send_keys(self.birthday)
        driver.find_element_by_id(
            "addFormEmailInput").send_keys(self.email)
        driver.find_element_by_id(
            "addFormRutInput").send_keys(self.rut)
        driver.find_element_by_id(
            "addFormPhoneInput").send_keys(self.phone)
        driver.find_element_by_id(
            "addFormOrganizationInput").send_keys(self.organization)
        driver.find_element_by_id(
            "addFormOrganizationAddressInput").send_keys(self.organizationAddress)
        driver.find_element_by_id(
            "addFormOrganizationPhoneInput").send_keys(self.organizationPhone)
        driver.find_element_by_id(
            "addFormOrganizationWebInput").send_keys(self.organizationWeb)

        driver.find_element_by_id("addUserButton").click()

        driver.find_element_by_id(
            "createButton").click()

        createdUserRow = driver.find_elements_by_xpath(
            '//*[@id="users"]/tbody/tr')[0]
        nameCell = createdUserRow.find_elements_by_tag_name('td')[1]
        self.assertIn(self.name, nameCell.text)
        driver.find_element_by_id(
            "cancelAddButton").click()
        driver.find_element_by_id(
            "deleteButton").click()

    def tearDown(self):
        self.driver.close()


if __name__ == '__main__':
    unittest.main(verbosity=2, testRunner=HTMLTestRunner(
        output='misreportes', report_name='Test_Report'))
