package com.model;

import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

@Entity
@Data
@Table(name = "product")
public class Product {
	
	
	    @Id
	    private String productId;

	    @NotNull
	    private String productName;

	    @NotNull
	    private BigDecimal productPrice;
	    
	    

	    @NotNull
	    @Min(0)
	    private Integer productStock;

	    private String productDescription;

	    private String productIcon;

	    @ColumnDefault("0")
	    private Integer productStatus;

	    @ColumnDefault("0")
	    private Integer categoryType;

	    @CreationTimestamp
	    private Date createTime;
	    @UpdateTimestamp
	    private Date updateTime;
	    
	   

	    public Product() {
	    }

		public String getProductId() {
			return productId;
		}

		public void setProductId(String productId) {
			this.productId = productId;
		}

		public String getProductName() {
			return productName;
		}

		public void setProductName(String productName) {
			this.productName = productName;
		}

		public BigDecimal getProductPrice() {
			return productPrice;
		}

		public void setProductPrice(BigDecimal productPrice) {
			this.productPrice = productPrice;
		}

		public Integer getProductStock() {
			return productStock;
		}

		public void setProductStock(Integer productStock) {
			this.productStock = productStock;
		}

		public String getProductDescription() {
			return productDescription;
		}

		public void setProductDescription(String productDescription) {
			this.productDescription = productDescription;
		}

		public String getProductIcon() {
			return productIcon;
		}

		public void setProductIcon(String productIcon) {
			this.productIcon = productIcon;
		}

		public Integer getProductStatus() {
			return productStatus;
		}

		public void setProductStatus(Integer productStatus) {
			this.productStatus = productStatus;
		}

		public Integer getCategoryType() {
			return categoryType;
		}

		public void setCategoryType(Integer categoryType) {
			this.categoryType = categoryType;
		}

		public Date getCreateTime() {
			return createTime;
		}

		public void setCreateTime(Date createTime) {
			this.createTime = createTime;
		}

		public Date getUpdateTime() {
			return updateTime;
		}

		public void setUpdateTime(Date updateTime) {
			this.updateTime = updateTime;
		}
		
		

		

		@Override
		public String toString() {
			return "Product [productId=" + productId + ", productName=" + productName + ", productPrice=" + productPrice
					+ ", productStock=" + productStock + ", productDescription=" + productDescription + ", productIcon="
					+ productIcon + ", productStatus=" + productStatus + ", categoryType=" + categoryType
					+ ", createTime=" + createTime + ", updateTime=" + updateTime + "]";
		}
	    
	    
	}

