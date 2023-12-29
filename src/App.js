import React, { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Input,
  Table,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";

const App = () => {
  const [invoiceForm, setInvoiceForm] = useState({
    logo: null,
    logoURL: "",
    yourInfo: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
    },
    companyInfo: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
    },
  });

  const handleYourInfoChange = (e) => {
    setInvoiceForm({
      ...invoiceForm,
      yourInfo: {
        ...invoiceForm.yourInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleCompanyInfoChange = (e) => {
    setInvoiceForm({
      ...invoiceForm,
      companyInfo: {
        ...invoiceForm.companyInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  console.log(invoiceForm);

  return (
    <Box className="app-container">
      <Container maxW="0xl">
        <Box className="heading">Create your invoice</Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%" h="100%">
            <Box className="invoice-container" p={5}>
              <Grid gap={4}>
                <GridItem colSpan={12}>
                  <span className="form-label">Logo</span>
                  {invoiceForm.logo ? (
                    <Box className="upload-box">
                      <img src={invoiceForm.logoURL} alt="invoice" />
                    </Box>
                  ) : (
                    <Box className="upload-box">
                      <input
                        type="file"
                        id="display-picture"
                        className="upload"
                        name="display_picture_note"
                        accept="image/*"
                        onChange={(e) => {
                          setInvoiceForm({
                            ...invoiceForm,
                            logo: e.target.files[0],
                            logoURL: URL.createObjectURL(e.target.files[0]),
                          });
                        }}
                      />
                    </Box>
                  )}
                </GridItem>
                <GridItem colSpan={6}>
                  <span className="form-label">Your info</span>
                  <Box>
                    <Grid gap={4}>
                      <GridItem colSpan={6}>
                        <Input
                          placeholder="First name"
                          size="lg"
                          value={invoiceForm.yourInfo.firstName}
                          onChange={handleYourInfoChange}
                          name="firstName"
                        />
                      </GridItem>
                      <GridItem colSpan={6}>
                        <Input
                          placeholder="Last name"
                          size="lg"
                          value={invoiceForm.yourInfo.lastName}
                          onChange={handleYourInfoChange}
                          name="lastName"
                        />
                      </GridItem>
                      <GridItem colSpan={12}>
                        <Input
                          placeholder="Email"
                          size="lg"
                          type="email"
                          value={invoiceForm.yourInfo.email}
                          onChange={handleYourInfoChange}
                          name="email"
                        />
                      </GridItem>
                      <GridItem colSpan={12}>
                        <Input
                          placeholder="Company name"
                          size="lg"
                          value={invoiceForm.yourInfo.companyName}
                          onChange={handleYourInfoChange}
                          name="companyName"
                        />
                      </GridItem>
                    </Grid>
                  </Box>
                </GridItem>
                <GridItem colSpan={6}>
                  <span className="form-label">Client info</span>
                  <Box>
                    <Grid gap={4}>
                      <GridItem colSpan={6}>
                        <Input
                          placeholder="First name"
                          size="lg"
                          value={invoiceForm.companyInfo.firstName}
                          onChange={handleCompanyInfoChange}
                          name="firstName"
                        />
                      </GridItem>
                      <GridItem colSpan={6}>
                        <Input
                          placeholder="Last name"
                          size="lg"
                          value={invoiceForm.companyInfo.lastName}
                          onChange={handleCompanyInfoChange}
                          name="lastName"
                        />
                      </GridItem>
                      <GridItem colSpan={12}>
                        <Input
                          placeholder="Email"
                          size="lg"
                          type="email"
                          value={invoiceForm.companyInfo.email}
                          onChange={handleCompanyInfoChange}
                          name="email"
                        />
                      </GridItem>
                      <GridItem colSpan={12}>
                        <Input
                          placeholder="Company name"
                          size="lg"
                          value={invoiceForm.companyInfo.companyName}
                          onChange={handleCompanyInfoChange}
                          name="companyName"
                        />
                      </GridItem>
                    </Grid>
                  </Box>
                </GridItem>
                <GridItem colSpan={12}>
                  <hr />
                </GridItem>
                <GridItem colSpan={12}>
                  <span className="form-label">Invoice info</span>
                  <Box>
                    <Grid gap={4}>
                      <GridItem colSpan={6} bg="papayawhip">
                        1
                      </GridItem>
                      <GridItem colSpan={6} bg="papayawhip">
                        2
                      </GridItem>
                      <GridItem colSpan={12} bg="tomato">
                        3
                      </GridItem>
                      <GridItem colSpan={12} bg="tomato">
                        4
                      </GridItem>
                    </Grid>
                  </Box>
                </GridItem>
                <GridItem colSpan={12}>
                  <hr />
                </GridItem>
                <GridItem colSpan={12}>
                  <span className="form-label">Items to bill</span>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>ITEM</Th>
                        <Th>Qty</Th>
                        <Th>Price</Th>
                        <Th isNumeric>Total</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>25.4</Td>
                        <Td isNumeric>25.4</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                  <Button size="sm" leftIcon={<GoPlus />}>
                    New Item
                  </Button>
                </GridItem>
                <GridItem colSpan={12}>
                  <hr />
                </GridItem>
                <GridItem colSpan={6}>
                  <span className="form-label">Memo</span>
                  <Textarea placeholder="Memo" rows={6} />
                </GridItem>
                <GridItem colSpan={6}>4</GridItem>
              </Grid>
            </Box>
          </GridItem>
          <GridItem w="100%" h="100%">
            <Grid gap={4}>
              <GridItem colSpan={12}>
                <Box className="preview-container" p={5}>
                  preview
                </Box>
              </GridItem>
              <GridItem colSpan={12}>
                <Button className="download-btn">Download as PDF</Button>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
