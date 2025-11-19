import React from "react";
import { Card, CardBody, CardFooter, Button, Badge, Divider, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface FishProduct {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  careLevel: string;
  imageId: string;
}

export const ProductsSection = () => {
  const categories = ["All", "Freshwater", "Saltwater", "Plants", "Supplies"];
  const [mainCategory, setMainCategory] = React.useState("All");
  const [modalCategory, setModalCategory] = React.useState("All");
  const { isOpen: isInventoryOpen, onOpen: openInventory, onOpenChange: onInventoryChange } = useDisclosure();
  const { isOpen: isProductModalOpen, onOpen: openProductModal, onOpenChange: onProductModalChange } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = React.useState<FishProduct | null>(null);
  
  const fishProducts: FishProduct[] = [
    {
      id: 1,
      name: "Neon Tetra",
      category: "Freshwater",
      price: "$3.99",
      description: "Small, peaceful schooling fish with bright blue and red coloration.",
      careLevel: "Beginner",
      imageId: "neon.jpg"
    },
    {
      id: 2,
      name: "Betta Fish",
      category: "Freshwater",
      price: "$12.99",
      description: "Vibrant, flowing fins with a variety of color patterns.",
      careLevel: "Beginner",
      imageId: "beta.jpg"
    },
    {
      id: 3,
      name: "Clownfish",
      category: "Saltwater",
      price: "$24.99",
      description: "Orange and white striped fish, made famous by Finding Nemo.",
      careLevel: "Intermediate",
      imageId: "clown.jpg"
    },
    {
      id: 4,
      name: "Discus Fish",
      category: "Freshwater",
      price: "$49.99",
      description: "Majestic, disc-shaped cichlids with vibrant patterns.",
      careLevel: "Advanced",
      imageId: "discus.jpg"
    },
    {
      id: 5,
      name: "Angelfish",
      category: "Freshwater",
      price: "$15.99",
      description: "Elegant, triangular-shaped fish with long fins.",
      careLevel: "Intermediate",
      imageId: "angelfish.webp"
    },
    {
      id: 6,
      name: "Guppy",
      category: "Freshwater",
      price: "$4.99",
      description: "Colorful, peaceful fish with beautiful flowing tails.",
      careLevel: "Beginner",
      imageId: "guppy.webp"
    },
    {
      id: 7,
      name: "Royal Gramma",
      category: "Saltwater",
      price: "$29.99",
      description: "Vibrant purple and yellow reef fish with peaceful temperament.",
      careLevel: "Intermediate",
      imageId: "gramma.jpg"
    },
    {
      id: 8,
      name: "Aquarium Kit 20gal",
      category: "Supplies",
      price: "$89.99",
      description: "Complete setup with tank, filter, heater, and lighting.",
      careLevel: "All Levels",
      imageId: "kit.webp"
    }
  ];

  const allProducts: FishProduct[] = [
    ...fishProducts,
    {
      id: 9,
      name: "Anubias Plant",
      category: "Plants",
      price: "$7.99",
      description: "Hardy plant with broad, dark green leaves.",
      careLevel: "Beginner",
      imageId: "anubias.webp"
    },
    {
      id: 10,
      name: "Java Fern",
      category: "Plants",
      price: "$6.99",
      description: "Hardy plant that attaches to rocks and driftwood.",
      careLevel: "Beginner",
      imageId: "JavaFern.webp"
    },
    {
      id: 11,
      name: "Coral Frags",
      category: "Saltwater",
      price: "$34.99",
      description: "Vibrant live coral fragments for reef aquariums.",
      careLevel: "Advanced",
      imageId: "coral.webp"
    },
    {
      id: 12,
      name: "Sword Plant",
      category: "Plants",
      price: "$8.99",
      description: "Popular aquarium plant with broad green leaves.",
      careLevel: "Beginner",
      imageId: "sword.jpg"
    }
  ];

  const handleProductDetails = (product: FishProduct) => {
    setSelectedProduct(product);
    openProductModal();
  };

  const filteredMainProducts = React.useMemo(() => {
    return mainCategory === "All" 
      ? fishProducts 
      : fishProducts.filter(product => product.category === mainCategory);
  }, [mainCategory]);
    
  const filteredModalProducts = React.useMemo(() => {
    return modalCategory === "All" 
      ? allProducts 
      : allProducts.filter(product => product.category === modalCategory);
  }, [modalCategory]);

  const handleOpenInventory = () => {
    setModalCategory("All");
    openInventory();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Fish & Products</h2>
          <Divider className="my-4 max-w-md mx-auto" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our diverse selection of healthy fish, plants, and quality supplies for your aquarium needs.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              color={mainCategory === category ? "primary" : "default"}
              variant={mainCategory === category ? "solid" : "flat"}
              onPress={() => setMainCategory(category)}
              className="min-w-[100px]"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={`main-grid-${mainCategory}`}
        >
          {filteredMainProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="h-full">
                <div className="relative">
                  <img 
                    src={`/assets/${product.imageId}`}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 z-20 m-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-primary-500 rounded-full shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                    <span className="font-medium text-primary-600">{product.price}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{product.description}</p>
                  <div className="flex items-center text-xs text-slate-500">
                    <Icon icon="lucide:info" className="mr-1" />
                    Care Level: {product.careLevel}
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    color="primary" 
                    variant="flat" 
                    fullWidth
                    startContent={<Icon icon="lucide:info" />}
                    onPress={() => handleProductDetails(product)}
                  >
                    More Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-600 mb-6">
            This is just a small sample of our inventory. Visit our store to see our full selection!
          </p>
          <Button 
            color="primary" 
            size="lg"
            endContent={<Icon icon="lucide:external-link" />}
            onPress={handleOpenInventory}
          >
            View Complete Inventory
          </Button>
        </motion.div>
      </div>
      
      <Modal 
        isOpen={isInventoryOpen} 
        onOpenChange={onInventoryChange}
        size="5xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Complete Inventory</h2>
                <p className="text-sm text-slate-500">Browse our extensive collection of aquatic life and supplies</p>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      color={modalCategory === category ? "primary" : "default"}
                      variant={modalCategory === category ? "solid" : "flat"}
                      onPress={() => setModalCategory(category)}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
                
                <div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  key={`modal-grid-${modalCategory}`}
                >
                  {filteredModalProducts.map((product) => (
                    <Card key={product.id} className="h-full">
                      <div className="relative">
                        <img 
                          src={`/assets/${product.imageId}`}
                          alt={product.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-0 right-0 z-20 m-2">
                          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-primary-500 rounded-full shadow-sm">
                            {product.category}
                          </span>
                        </div>
                      </div>
                      <CardBody className="p-3">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-md font-semibold text-slate-900">{product.name}</h3>
                          <span className="font-medium text-primary-600">{product.price}</span>
                        </div>
                        <p className="text-xs text-slate-600 mb-2">{product.description}</p>
                        <div className="flex items-center text-xs text-slate-500">
                          <Icon icon="lucide:info" className="mr-1" size={12} />
                          Care Level: {product.careLevel}
                        </div>
                      </CardBody>
                      <CardFooter className="pt-0 p-3">
                        <Button
                          color="primary" 
                          variant="flat" 
                          fullWidth
                          size="sm"
                          startContent={<Icon icon="lucide:info" size={14} />}
                          onPress={() => {
                            handleProductDetails(product);
                            onClose();
                          }}
                        >
                          More Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <p className="text-sm text-slate-500 mr-auto">
                  Prices and availability may vary. Please visit our store or call for current stock.
                </p>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal 
        isOpen={isProductModalOpen} 
        onOpenChange={onProductModalChange}
        size="2xl"
        scrollBehavior="inside"
        classNames={{
          base: "max-h-[95vh] my-2",
          wrapper: "items-center"
        }}
      >
        <ModalContent>
          {(onClose) => selectedProduct && (
            <>
              <ModalHeader className="flex flex-col gap-1 flex-shrink-0">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-xl md:text-2xl font-bold">{selectedProduct.name}</h2>
                  <span className="inline-block px-2 py-1 text-xs font-medium text-white bg-primary-500 rounded-full shadow-sm flex-shrink-0">
                    {selectedProduct.category}
                  </span>
                </div>
              </ModalHeader>
              <ModalBody className="overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="rounded-lg overflow-hidden max-h-64 md:max-h-full">
                    <img 
                      src={`/assets/${selectedProduct.imageId}`}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900">Details</h3>
                      <span className="text-lg md:text-xl font-bold text-primary-600">{selectedProduct.price}</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-700">Description</h4>
                        <p className="text-slate-600">{selectedProduct.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-slate-700">Care Level</h4>
                        <div className="flex items-center gap-2">
                          <Badge color={
                            selectedProduct.careLevel === "Beginner" ? "success" : 
                            selectedProduct.careLevel === "Intermediate" ? "warning" : 
                            "danger"
                          }>
                            {selectedProduct.careLevel}
                          </Badge>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-slate-700">Care Requirements</h4>
                        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 mt-1">
                          {selectedProduct.category === "Freshwater" && (
                            <>
                              <li>Water Temperature: 72-78°F</li>
                              <li>pH Level: 6.5-7.5</li>
                              <li>Tank Size: 10+ gallons</li>
                            </>
                          )}
                          {selectedProduct.category === "Saltwater" && (
                            <>
                              <li>Water Temperature: 75-80°F</li>
                              <li>Salinity: 1.023-1.025</li>
                              <li>Tank Size: 30+ gallons</li>
                            </>
                          )}
                          {selectedProduct.category === "Plants" && (
                            <>
                              <li>Lighting: Medium</li>
                              <li>Substrate: Nutrient-rich</li>
                              <li>CO2: Optional</li>
                            </>
                          )}
                          {selectedProduct.category === "Supplies" && (
                            <>
                              <li>Easy to set up and maintain</li>
                              <li>Includes detailed instructions</li>
                              <li>Compatible with standard accessories</li>
                            </>
                          )}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-slate-700">Availability</h4>
                        <p className="text-slate-600">In stock at our Archdale location. Please call to confirm current inventory.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-medium text-slate-800 mb-2">Staff Notes</h4>
                  <p className="text-sm text-slate-600">
                    {selectedProduct.category === "Freshwater" && "Our freshwater fish are quarantined for at least 7 days before being offered for sale to ensure they're healthy and disease-free."}
                    {selectedProduct.category === "Saltwater" && "Our saltwater specimens are carefully acclimated and observed to ensure they're eating well and showing healthy behavior before being offered for sale."}
                    {selectedProduct.category === "Plants" && "All our aquatic plants are grown in optimal conditions and free from pests. They're ready to thrive in your home aquarium with proper care."}
                    {selectedProduct.category === "Supplies" && "We only stock quality supplies that we've tested and trust. Ask our staff for setup and maintenance tips!"}
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button 
                  color="primary"
                  startContent={<Icon icon="lucide:phone" />}
                  as="a"
                  href="tel:+17436001363"
                >
                  Call for Availability
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};